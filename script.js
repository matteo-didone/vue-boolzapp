// Milestone 1
// Replica of the graphics with the ability to have messages written by the user (green) and the interlocutor (white), assigning two different CSS classes
// Dynamic display of the contacts list: using the v-for directive, display the name and image of each contact

// Milestone 2
// Dynamic display of messages: using the v-for directive, display all messages related to the active contact within the conversation panel
// Clicking on a contact shows the conversation of the clicked contact

// Milestone 3
// Adding a message: the user writes a text in the bottom part and by pressing "enter," the text is added to the thread above as a green message
// Interlocutor's response: upon entering a message, the user will receive an "OK" as a response, which will appear after 1 second.

// Milestone 4
// User search: by typing something in the left input, only the contacts whose names contain the entered letters are displayed (e.g., Marco, Matteo, Martina -> I write "mar" and only Marco and Martina remain)

// Milestone 5 - optional
// Delete message: by clicking on the message, a dropdown menu appears that allows deleting the selected message
// Displaying the time and last sent/received message in the contacts list.

const { createApp } = Vue;

createApp({

    // Status of the app (data) 
    data() {
        return {
            // Array of contacts
            contacts: [
                {
                    // Contact Michele
                    name: 'Michele',
                    avatar: './img/avatar_1.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                // Contact Fabio
                {
                    name: 'Fabio',
                    avatar: './img/avatar_2.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                // Contact Samuele
                {
                    name: 'Samuele',
                    avatar: './img/avatar_3.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                // Contact Alessandro B.
                {
                    name: 'Alessandro B.',
                    avatar: './img/avatar_4.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
                // Contact Alessandro L.
                {
                    name: 'Alessandro L.',
                    avatar: './img/avatar_5.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received'
                        }
                    ],
                },
                // Contact Claudia
                {
                    name: 'Claudia',
                    avatar: './img/avatar_6.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Non ancora',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent'
                        }
                    ],
                },
                // Contac   t Federico
                {
                    name: 'Federico',
                    avatar: './img/avatar_7.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received'
                        }
                    ],
                },
                // Contact Davide
                {
                    name: 'Davide',
                    avatar: './img/avatar_8.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received'
                        }
                    ],
                }
            ],

            // Add the currentContact property to the data object and set it to 0
            currentContact: 0,

            // Add the newMessage property to the data object and set it to an empty string
            newMessage: '',
        }
    },

    // Methods of the app
    methods: {

        getLastMessage(contact) {
            const lastMessage = contact.messages[contact.messages.length - 1];
            return lastMessage ? lastMessage.message : '';
        },

        getLastMessageTime(contact) {
            const lastMessage = contact.messages[contact.messages.length - 1];
            if (lastMessage) {
                const dateParts = lastMessage.date.split(' ');
                const [day, month, year] = dateParts[0].split('/');
                const [hour, minute, second] = dateParts[1].split(':');
                const messageDate = new Date(year, month - 1, day, hour, minute, second);
                const formattedTime = messageDate.toLocaleTimeString('it-IT', {
                    hour: '2-digit',
                    minute: '2-digit',
                });
                return formattedTime;
            }
            return '';
        },

        setIndexContact(index) {
            // Update the currentContact property with the index of the contact clicked
            this.currentContact = index;
        },

        sendMessage() {
            const message = {
                date: new Date().toLocaleString(),
                message: this.newMessage,
                status: 'sent',
            };
            this.contacts[this.currentContact].messages.push(message);
            this.newMessage = ''; // Clear the input field
            setTimeout(() => {
                const response = {
                    date: new Date().toLocaleString(),
                    message: 'Ok',
                    status: 'received',
                };
                this.contacts[this.currentContact].messages.push(response);
            }, 1000);
        },

    },

}).mount('#app');
