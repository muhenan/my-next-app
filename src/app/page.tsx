import Head from 'next/head';

export default function Home() {
  // 样式对象
  const styles = {
    container: {
      maxWidth: '800px',
      margin: '50px auto',
      padding: '20px',
      backgroundColor: '#fff',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      borderRadius: '8px',
    },
    title: {
      fontSize: '2.5em',
      color: '#2c3e50',
      textAlign: 'center' as const,
      marginBottom: '20px',
      fontWeight: 'bold',
    },
    paragraph: {
      fontSize: '1.2em',
      color: '#555',
      marginBottom: '20px',
      textAlign: 'justify' as const,
    },
    list: {
      listStyleType: 'square',
      paddingLeft: '20px',
    },
    listItem: {
      fontSize: '1.1em',
      color: '#34495e',
      marginBottom: '10px',
    },
    strong: {
      color: '#e74c3c',
    },
  };

  return (
    <div>
      <Head>
        <title>Resume Optimizer</title>
        <meta name="description" content="A simple tool to help you optimize and improve your resume." />
      </Head>
      <main style={styles.container}>
        <h1 style={styles.title}>Welcome to Resume Optimizer</h1>
        <p style={styles.paragraph}>Here are some tips for optimizing your resume:</p>
        <ul style={styles.list}>
          <li style={styles.listItem}>
            <strong style={styles.strong}>Clear and concise:</strong> Make sure your resume is easy to read and highlights your key achievements.
          </li>
          <li style={styles.listItem}>
            <strong style={styles.strong}>Tailor to the job:</strong> Customize your resume for each position you apply for.
          </li>
          <li style={styles.listItem}>
            <strong style={styles.strong}>Use action verbs:</strong> Start bullet points with strong action verbs like "developed" or "led."
          </li>
        </ul>
      </main>
    </div>
  );
}
