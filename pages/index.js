import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { connect, createStoreHook, Provider, useStore } from 'react-redux'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab, faFacebook, faGithub, faInstagram, faLinkedin, faTumblr, faTwitter } from '@fortawesome/free-brands-svg-icons'
import React from 'react'
import {createStore} from 'redux'
library.add(fab)

export default function Home(func) {
  const citations = [
    'Quero o inesperado. Quero o impossível',
    'Clarice Lispector',
    'A moral é a debilidade do cérebro.',
    'Arthur Rimbaud',
    'O que realmente deixa um homem lisonjeado é o fato de você o considerar digno de adulação.',
    'Bernard Shaw',
    'Há livros escritos para evitar espaços vazios na estante.',
    'Carlos Drummond de Andrade',
    'Respirar é uma doença!',
    'Charles Bukowski',
    'Engolimos de uma vez a mentira que nos adula e bebemos gota a gota a verdade que nos amarga.',
    'Denis Diderot',
    'Políticos e fraldas devem ser trocados de tempos em tempos pelo mesmo motivo.',
    'Eça de Queiróz',
    'Felicidade em pessoas inteligentes é a coisa mais rara que conheço.',
    'Ernest Hemingway',
    'Não me venham com conclusões! A única conclusão é morrer.',
    'Fernando Pessoa',
    'A mentira é o único privilégio do homem sobre todos os outros animais.',
    'Fiódor Dostoiévski',
    'Ninguém pode ser sábio de estômago vazio.',
    'George Eliot',
    'Em tempos de embustes universais, dizer a verdade se torna um ato revolucionário.',
    'George Orwell',
    'Algo deve mudar para que tudo continue como está.',
    'Giuseppe Tomasi di Lampedusa',
    'Tenha cuidado com a tristeza. É um vício.',
    'Gustave Flaubert',
    'Não há mentira pior do que uma verdade mal compreendida por aqueles que a ouvem.',
    'Henry James',
    'É permissível a cada um de nós morrer pela sua fé, mas não matar por ela.',
    'Hermann Hesse',
    'É pecado pensar mal dos outros, mas raramente é engano.',
    'H. L. Mencken',
    'É tão absurdo dizer que um homem não pode amar a mesma mulher toda a vida, quanto dizer que um violinista precisa de diversos violinos para tocar a mesma música.',
    'Honoré de Balzac',
    'Os criacionistas fazem com que uma teoria pareça uma coisa que se inventou depois de beber a noite inteira.',
    'Isaac Asimov',
    'A verdadeira função do homem é viver, não existir.',
    'Jack London',
    'A única exigência que faço aos meus leitores é que devem dedicar as suas vidas à leitura das minhas obras.',
    'James Joyce',
    'Quem é que quer flores depois de morto?',
    'J. D. Salinger',
    'A democracia é um erro estatístico, porque na democracia decide a maioria e a maioria é formada de imbecis.',
    'Jorge Luis Borges',
    'Viver é negócio muito perigoso.',
    'João Guimarães Rosa',
    'Luz, mais luz.',
    'Johann Wolfgang von Goethe',
    'O horror! O horror!',
    'Joseph Conrad',
    'Um pouco de desprezo economiza bastante ódio.',
    'Jules Renard',
    'Ser valente é muito mais fácil do que ser homem.',
    'Julio Cortázar',
    'O ciúme é um latido que atrai cães.',
    'Karl Kraus',
    'Humanista é uma pessoa com grande interesse pelos seres humanos. Meu cachorro é humanista.',
    'Kurt Vonnegut',
    'Todas as famílias felizes se parecem cada família infeliz é infeliz à sua maneira.',
    'Lev Tolstói',
    'A solidão é a mãe da sabedoria.',
    'Laurence Sterne',
    'Estar sozinho é treinarmo-nos para a morte.',
    'Louis-Ferdinand Céline',
    'Assim é, se lhe parece.',
    'Luigi Pirandello',
    'Aquele que lê maus livros não leva vantagem sobre aquele que não lê livro nenhum.',
    'Mark Twain',
    'Não há regra sem exceção.',
    'Miguel de Cervantes',
    'Quanto mais sublimes forem as verdades mais prudência exige o seu uso; senão, de um dia para o outro, transformam-se em lugares comuns e as pessoas nunca mais acreditam nelas.',
    'Nikolai Gógol',
    'Viver é a coisa mais rara do mundo. A maioria das pessoas apenas existe.',
    'Oscar Wilde',
    'Qual é a tarefa mais difícil do mundo? Pensar.',
    'Ralph Waldo Emerson',
    'A política talvez seja a única profissão para a qual não se julga necessária uma preparação.',
    'Robert Louis Stevenson',
    'Quando uma pessoa sofre um delírio, se chama loucura. Quando muitas pessoas sofrem um delírio, isso se chama religião.',
    'Robert M. Pirsig',
    'Não há nenhum pensamento importante que a burrice não saiba usar, ela é móvel para todos os lados e pode vestir todos os trajes da verdade.',
    'Robert Musil',
    'Respirei fundo e escutei o velho e orgulhoso som do meu coração. Eu sou, eu sou, eu sou.',
    'Sylvia Plath',
    'Nada inspira mais coragem ao medroso do que o medo alheio.',
    'Umberto Eco',
    'Nossa existência não é mais que um curto circuito de luz entre duas eternidades de escuridão.',
    'Vladimir Nabókov',
    'A gargalhada é o sol que varre o inverno do rosto humano.',
    'Victor Hugo',
    'Devemos julgar um homem mais pelas suas perguntas que pelas respostas.',
    'Voltaire',
    'A vida é uma história contada por um idiota, cheia de som e de fúria, sem sentido algum.',
    'William Shakespeare'
  ];  
  const [frase, setfrase] = useState(citations[0]);
  const [autor, setautor] = useState(citations[1]);
  let len = frase.length
  let back = len < 35 ? styles.back1 : len < 50 ? styles.back2: len < 65 ? styles.back3: styles.back4
  let icons = len < 35 ? styles.icons1 : len < 50 ? styles.icons2: len < 65 ? styles.icons3: styles.icons4
  let red = len < 35 ? styles.red1 : len < 50 ? styles.red2: len < 65 ? styles.red3: styles.red4
  let title = len < 35 ? styles.title1 : len < 50 ? styles.title2: len < 65 ? styles.title3: styles.title4

  const clicar = (citations) => {
    var num = parseInt(Math.random() * 96 + 0, 10);
    if(num % 2 == 0){
      setautor(citations[num+ 1]);
      setfrase(citations[num]);
      
    } else if (num % 2 == 1){
      setautor(citations[num]);
      setfrase(citations[num -1]);
      
    } else{
      setautor('ERRO !');
      setfrase('Algo de errado aconteceu com a busca aleatória');
    }
    
  } 
  return (
    <div className = {back} id = 'quote-box'>
      <Head>
        <title>FCC: Random Quote Machine!</title>
      </Head>
      <div className={styles.navsup}>
        <ul >
          <a className={icons} href="https://github.com/douradodev" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} width='1.5rem' />
          </a>
          <a className={icons} href="https://www.instagram.com/douradoxx/?hl=pt-br" target="_blank" rel="noopener noreferrer" >
            <FontAwesomeIcon icon={faInstagram} width='1.5rem'/>
          </a>
          <a className={icons} href="https://www.linkedin.com/in/victor-dourado-610477207/" target="_blank" rel="noopener noreferrer" >
            <FontAwesomeIcon icon={faLinkedin} width='1.5rem'/>
          </a>
          <a className={icons} href="https://www.facebook.com/victor.dourado.376/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} width='1.5rem' />
          </a>
        </ul>
      </div>
      <div className= {styles.main}>
        <div >
          <h1 className = {title} id = 'text'>
            {frase}
          </h1>
          <p className = {title} id = 'author'>
            {autor}
          </p>
        </div>
        <button  className = {red} id = 'new-quote' onClick={() => {clicar(citations)}} >
          New citation!
          </button>
        <div>
          <a className={red} href="https:twitter.com/intent/tweet" target= '_blank' id = 'tweet-quote'>
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a className= {red} href="https://www.tumblr.com/?language=pt_BR" target= '_blank' id = 'tumblr-quote'>
            <FontAwesomeIcon icon={faTumblr} />
          </a>
        </div>
      </div>
    </div>
  )
}

