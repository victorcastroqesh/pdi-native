import React from 'react';
import {Button, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './style';
import {Board, Player} from './Gamescreen.structure';

export default function GameScreen() {
  const [board, setBoard] = React.useState<Board>(Array(9).fill(null));
  const [player, setPlayer] = React.useState<Player>('X');
  const [winner, setWinner] = React.useState<Player | 'Empate' | null>(null);
  const [score, setScore] = React.useState<{X: number; O: number}>({
    X: 0,
    O: 0,
  });

  const handleClick = (index: number) => {
    if (board[index] || winner) {
      return;
    }

    const newBoard = [...board];
    newBoard[index] = player!;
    setBoard(newBoard);

    const newPlayer = player === 'X' ? 'O' : 'X';
    setPlayer(newPlayer);

    checkWinner(newBoard);
  };

  const checkWinner = (currentBoard: Board) => {
    const winPatterns: number[][] = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (const pattern of winPatterns) {
      const [a, b, c] = pattern;
      if (
        currentBoard[a] &&
        currentBoard[a] === currentBoard[b] &&
        currentBoard[a] === currentBoard[c]
      ) {
        setWinner(currentBoard[a]);
        updateScore(currentBoard[a]);
        return;
      }
    }

    if (currentBoard.every((square: any) => square)) {
      setWinner('Empate');
    }
  };
  const updateScore = (winner: Player) => {
    setScore(prevScore => {
      const updatedScore = {...prevScore} as {X: number; O: number};
      if (winner) {
        updatedScore[winner] += 1;
      }
      return updatedScore;
    });
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setPlayer('X');
    setWinner(null);
  };

  const clearScore = () => {
    setScore({X: 0, O: 0});
  };

  const renderSquare = (index: number) => (
    <TouchableOpacity
      style={styles.button}
      onPress={() => handleClick(index)}
      disabled={!!board[index] || !!winner}>
      <View style={styles.buttonTextView}>
        <Text style={styles.buttonText}>{board[index] || ''}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Jogo da Velha</Text>
      <View style={styles.gameRow}>
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </View>
      <View style={styles.gameRow}>
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </View>
      <View style={styles.gameRow}>
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </View>
      <Text style={styles.scoreText}>
        {winner ? `Vencedor: ${winner}` : `Próximo Jogador: ${player}`}
      </Text>
      <View style={styles.buttonsView}>
        <Button title="Limpar Tabuleiro" onPress={resetGame} />
        <Button title="Limpar Placar" onPress={clearScore} />
      </View>
      <View style={styles.scoreContainer}>
        <Text style={styles.score}>Placar:</Text>
        <Text>playerX: {score.X}</Text>
        <Text>playerO: {score.O}</Text>
      </View>
    </View>
  );
}
