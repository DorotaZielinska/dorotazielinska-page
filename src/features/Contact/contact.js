import {
    AnimateWrapper,
    ContactButton,
    ContactForm,
    ContactImage,
    ContactWrapper,
    Field,
    FormContainer,
    SubTitle,
    TextContainer,
    TextField,
  } from "./styled";
  
  const variants = {
    initial: {
      y: 500,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  };
  
  export const Contact = () => {
    return (
      <ContactWrapper variants={variants} initial="initial" whileInView="animate">
        <TextContainer variants={variants}>
          <SubTitle variants={variants}>Let's work together</SubTitle>
        </TextContainer>
        <FormContainer>
          <AnimateWrapper
            initial={{ opacity: 1 }}
            whileInView={{ opacity: 0 }}
            transition={{ delay: 2, duration: 1 }}
          >
            <ContactImage
              initial={{ opacity: 1 }}
              whileInView={{ opacity: 0 }}
              transition={{ duration: 2 }}
            />
          </AnimateWrapper>
          <ContactForm
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 3, duration: 1 }}
          >
            <Field type="text" required placeholder="Name" />
            <Field type="email" required placeholder="Email" />
            <TextField rows={8} placeholder="Message" />
            <ContactButton>Submit</ContactButton>
          </ContactForm>
        </FormContainer>
      </ContactWrapper>
    );
  };
  