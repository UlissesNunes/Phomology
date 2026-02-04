import FooterPhomo from '../../../componentes/FooterPhomo';
import { Heading } from '../../../componentes/Heading';
import '../../App.css';

type MainTemplatesProps = {
  children: React.ReactNode;
};

export function MainTemplates({ children }: MainTemplatesProps) {
  return (
    <>
      <Heading />

      {children}
      <FooterPhomo />
      
    </>
  );
}
