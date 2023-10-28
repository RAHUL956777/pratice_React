
import { Link } from 'react-router-dom'; // If using React Router
import img from '../assets/er.webp'

const Error = ({message}) => {
  return (
    <div style={styles.container}>
      <div style={styles.errorText}>Oops! Something went wrong</div>
      <img src={img} alt="Error" style={styles.errorImage} />
      <p style={styles.errorMessage}>
        {message}{' '}
        <Link to="/" style={styles.link}>
          Home
        </Link>.
      </p>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  },
  errorText: {
    fontSize: '36px',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  errorImage: {
    maxWidth: '100%',
    height: 'auto',
  },
  errorMessage: {
    fontSize: '18px',
    textAlign: 'center',
  },
  link: {
    color: 'blue',
    textDecoration: 'underline',
  },
};

export default Error;
