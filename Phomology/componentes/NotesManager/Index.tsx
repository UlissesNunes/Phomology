import { useState, useEffect } from 'react'
import { Plus, Trash2, Edit3, Save, XCircle } from 'lucide-react'
import styles from './NotesManager.module.css'

type Note = {
  id: string;
  title: string;
  content: string;
  date: string;
}

export default function NotesManager() {
  // --- INICIALIZAÇÃO OTIMIZADA ---
  // O React executa esta função apenas UMA VEZ ao montar o componente
  const [notes, setNotes] = useState<Note[]>(() => {
    const saved = localStorage.getItem('@Phomology:notes')
    try {
      return saved ? JSON.parse(saved) : []
    } catch (error) {
      console.error("Erro ao carregar notas do localStorage:", error)
      return []
    }
  })

  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [editingId, setEditingId] = useState<string | null>(null)

  // --- SINCRONIZAÇÃO ---
  // Este efeito agora só tem UMA função: Salvar quando a lista mudar.
  useEffect(() => {
    localStorage.setItem('@Phomology:notes', JSON.stringify(notes))
  }, [notes])

  const handleSaveNote = () => {
    if (!title.trim() || !content.trim()) return

    if (editingId) {
      setNotes(prev => prev.map(note => 
        note.id === editingId 
          ? { ...note, title, content, date: `Editado em ${new Date().toLocaleDateString('pt-BR')}` }
          : note
      ))
      setEditingId(null)
    } else {
      const newNote: Note = {
        id: crypto.randomUUID(),
        title,
        content,
        date: new Date().toLocaleDateString('pt-BR')
      }
      setNotes(prev => [newNote, ...prev])
    }

    setTitle('')
    setContent('')
  }

  const handleEditRequest = (note: Note) => {
    setEditingId(note.id)
    setTitle(note.title)
    setContent(note.content)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleDeleteNote = (id: string) => {
    if (window.confirm("Deseja apagar esta nota?")) {
      setNotes(prev => prev.filter(note => note.id !== id))
    }
  }

  return (
    <main className={styles.container}>
      <header className={styles.pageHeader}>
        <h2>Anotações Phomology</h2>
        <p>{notes.length} notas no total</p>
      </header>

      <section className={styles.inputSection}>
        <div className={`${styles.cardCreator} ${editingId ? styles.editingGlow : ''}`}>
          <input 
            type="text" 
            placeholder="Título..." 
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={styles.titleInput}
          />
          <textarea 
            placeholder="Conteúdo..." 
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className={styles.contentInput}
          />
          
          <div className={styles.buttonGroup}>
            <button onClick={handleSaveNote} className={styles.saveBtn}>
              {editingId ? <Save size={20} /> : <Plus size={20} />}
              {editingId ? 'Atualizar' : 'Criar nota'}
            </button>
            {editingId && (
              <button onClick={() => {setEditingId(null); setTitle(''); setContent('')}} className={styles.cancelBtn}>
                <XCircle size={20} /> Cancelar
              </button>
            )}
          </div>
        </div>
      </section>

      <section className={styles.notesGrid}>
        {notes.map(note => (
          <div key={note.id} className={styles.noteCard}>
            <div className={styles.noteHeader}>
              <h3>{note.title}</h3>
              <div className={styles.actions}>
                <button onClick={() => handleEditRequest(note)}><Edit3 size={18} /></button>
                <button onClick={() => handleDeleteNote(note.id)}><Trash2 size={18} /></button>
              </div>
            </div>
            <p className={styles.noteContent}>{note.content}</p>
            <span className={styles.noteDate}>{note.date}</span>
          </div>
        ))}
      </section>
    </main>
  )
}