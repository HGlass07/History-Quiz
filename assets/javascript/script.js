/*possible question selection, 15 in total, with 10 being randomly chosen for a given round*/
let questions = [
    {
        question: "Which emperor built the wall that stretches across northern Britain?",
        answers: [
            { text: "Hadrian", correct: true},
            { text: "Constantine", correct: false},
            { text: "Romulus", correct: false},
            { text: "Augustus", correct: false},
        ]
    },
    {
        question: "Who did the Romans fight in the Punic Wars?",
        answers: [
            { text: "Greece", correct: false},
            { text: "Egypt", correct: false},
            { text: "Carthage", correct: true},
            { text: "Persia", correct: false},
        ]
    },
    {
        question: "What is another name for the Colosseum?",
        answers: [
            { text: "The Roman Arena", correct: false},
            { text: "The Circus Maximus", correct: false},
            { text: "The Flavian Amphetheater", correct: true},
            { text: "The Gladiators Arena", correct: false},
        ]
    },
    {
        question: "According to one legend, Aeneas founded Rome, where was he from?",
        answers: [
            { text: "Syracuse", correct: false},
            { text: "Alexandria", correct: false},
            { text: "Athens", correct: false},
            { text: "Troy", correct: true},
        ]
    },
    {
        question: "In the Roman Republic, how many Consuls were there?",
        answers: [
            { text: "Two", correct: true},
            { text: "Three", correct: false},
            { text: "One", correct: false},
            { text: "Four", correct: false},
        ]
    },
    {
        question: "What was the Roman name for the greek goddess Artemis?",
        answers: [
            { text: "Minerva", correct: false},
            { text: "Diana", correct: true},
            { text: "Demeter", correct: false},
            { text: "Juno", correct: false},
        ]
    },
    {
        question: "What equipment did a retiarius gladiator use?",
        answers: [
            { text: "Sword and Shield", correct: false},
            { text: "Net and Trident", correct: true},
            { text: "Two Swords", correct: false},
            { text: "Spear and Shield", correct: false},
        ]
    },
    {
        question: "What was the dome of the Pantheon building made from?",
        answers: [
            { text: "Concrete", correct: true},
            { text: "Marble", correct: false},
            { text: "Limestone", correct: false},
            { text: "Brick", correct: false},
        ]
    },
    {
        question: "When the Roman empire split, what became the capital of the eastern half?",
        answers: [
            { text: "Thessalonica", correct: false},
            { text: "Damascus", correct: false},
            { text: "Constantinople", correct: true},
            { text: "Nicea", correct: false},
        ]
    },
    {
        question: "Who sacked Rome in the year 410AD?",
        answers: [
            { text: "The Huns", correct: false},
            { text: "The Goths", correct: true},
            { text: "The Franks", correct: false},
            { text: "The Lombards", correct: false},
        ]
    },
    {
        question: "Which leader did Julius Ceasar defeat at the siege of Alesia?",
        answers: [
            { text: "Brennus", correct: false},
            { text: "Vortigern", correct: false},
            { text: "Alaric", correct: false},
            { text: "Vercingetorix", correct: true},
        ]
    },
    {
        question: "Augustus Ceasar and Marc Anothony were members of the second triumvirate, who was the third?",
        answers: [
            { text: "Pompey Magnus", correct: false},
            { text: "Julius Caesar", correct: false},
            { text: "Marcus Lepidus", correct: true},
            { text: "Marcus Crassus", correct: false},
        ]
    },
    {
        question: "Queen Boudica rebelled against the Romans, which tribe was she from?",
        answers: [
            { text: "Catuvellauni", correct: false},
            { text: "Brigantes", correct: false},
            { text: "Atrebates", correct: false},
            { text: "Iceni", correct: true},
        ]
    },
    {
        question: "Under which emperor did Rome reach it's greatest extent?",
        answers: [
            { text: "Trajan", correct: true},
            { text: "Aurelian", correct: false},
            { text: "Diocletian", correct: false},
            { text: "Marcus Aurelius", correct: false},
        ]
    },
    {
        question: "Which gods made up the 'Capitoline Triad'?",
        answers: [
            { text: "Jupiter, Mars, Neptune", correct: false},
            { text: "Jupiter, Juno, Minerva", correct: true},
            { text: "Mars, Venus, Pluto", correct: false},
            { text: "Mercury, Vulcan, Ceres", correct: false},
        ]
    }                           
];
