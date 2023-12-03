import React from "react";
import './App.css';
import Card from "./components/Card/Card";
import Result from './components/Result/Result';

const App = (props) => {

  // Définir l'état initial
  const [stateResult, setStateResult] = React.useState(
    {
      displayResult: false, //Le composant result est false donc cahé 
      displayCard: true, //Le composant result est true  donc affiché
      selectedNumber: null
    }
  )
  // La fonction qui bascule l'affichage du composant Result et Card
  const handledisplayResult = (selectedNumber) => {
    setStateResult({
      displayResult: !stateResult.displayResult,
      displayCard: !stateResult.displayCard,
      selectedNumber: selectedNumber,
    });
  };

  return (
    <>
      <header></header>
      {/* Si displayCard est true, affiche le composant Card */}
      {stateResult.displayCard &&
        <main>
          <Card
            handledisplayResult={handledisplayResult}>
          </Card>
        </main>}
      {/* Si displayResult est true, affiche le composant Result avec le nombre sélectionné */}
      {stateResult.displayResult && <main><Result
        selectedNumber={stateResult.selectedNumber}>
      </Result>
      </main>}
    </>
  )

}

export default App;
