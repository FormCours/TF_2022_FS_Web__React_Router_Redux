import ProgressBar from '../../containers/progress-bar/progress-bar';

const HomePage = () => {

  return (
    <>
      <h1>Page d'accueil 🦄</h1>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora maxime omnis itaque dolores maiores iste fuga provident. Eveniet omnis iure odit aspernatur, illo suscipit hic quia alias enim commodi dolorum.</p>
   
      <h2>Demo barre de progression</h2>
      <ProgressBar val={10_000} />
    </>
  );
};

export default HomePage;