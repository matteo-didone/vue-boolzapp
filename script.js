// Milestone 5 - optional
// Delete message: by clicking on the message, a dropdown menu appears that allows deleting the selected message

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
                            status: 'sent',
                            deletable: 'true',
                            showDropdown: 'false',
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent',
                            deletable: 'true',
                            showDropdown: 'false',
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received',
                            deletable: 'true',
                            showDropdown: 'false',
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
                            status: 'sent', 
                            deletable: 'true',
                            showDropdown: 'false',
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received',
                            deletable: 'true',
                            showDropdown: 'false',
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent',
                            deletable: 'true',
                            showDropdown: 'false',
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
                            status: 'received',
                            deletable: 'true',
                            showDropdown: 'false',
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent',
                            deletable: 'true',
                            showDropdown: 'false',
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received',
                            deletable: 'true',
                            showDropdown: 'false',
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
                            status: 'sent',
                            deletable: 'true',
                            showDropdown: 'false',
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received',
                            deletable: 'true',
                            showDropdown: 'false',
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
                            status: 'sent',
                            deletable: 'true',
                            showDropdown: 'false',
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received',
                            deletable: 'true',
                            showDropdown: 'false',
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
                            status: 'sent',
                            deletable: 'true',
                            showDropdown: 'false',
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Non ancora',
                            status: 'received',
                            deletable: 'true',
                            showDropdown: 'false',
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent',
                            deletable: 'true',
                            showDropdown: 'false',
                        }
                    ],
                },
                // Contact Federico
                {
                    name: 'Federico',
                    avatar: './img/avatar_7.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent',
                            deletable: 'true',
                            showDropdown: 'false',
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received',
                            deletable: 'true',
                            showDropdown: 'false',
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
                            status: 'received',
                            deletable: 'true',
                            showDropdown: 'false',
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent',
                            deletable: 'true',
                            showDropdown: 'false',
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received',
                            deletable: 'true',
                            showDropdown: 'false',
                        }
                    ],
                },
                {
                    // Contact Matteo
                    name: 'Matteo',
                    avatar: './img/avatar_1.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent',
                            deletable: 'true',
                            showDropdown: 'false',
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent',
                            deletable: 'true',
                            showDropdown: 'false',
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received',
                            deletable: 'true',
                            showDropdown: 'false',
                        }
                    ],
                },
                {
                    // Contact Martina
                    name: 'Martina',
                    avatar: './img/avatar_6.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent',
                            deletable: 'true',
                            showDropdown: 'false',
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent',
                            deletable: 'true',
                            showDropdown: 'false',
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received',
                            deletable: 'true',
                            showDropdown: 'false',
                        }
                    ],
                },
                {
                    // Contact Marco
                    name: 'Marco',
                    avatar: './img/avatar_3.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent',
                            deletable: 'true',
                            showDropdown: 'false',
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent',
                            deletable: 'true',
                            showDropdown: 'false',
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received',
                            deletable: 'true',
                            showDropdown: 'false',
                        }
                    ],
                },
            ],

            // Add the currentContact property to the data object and set it to 0
            currentContact: 0,

            // Add the newMessage property to the data object and set it to an empty string
            newMessage: '',

            // Clicked contact property to the data object and set it to null
            clickedContact: null,

            // Add the searchContact property to the data object and set it to an empty string
            searchContact: '',
        }
    },

    // Computed properties are used to handle complex calculations of information that need to be displayed in the view (e.g. filtering, sorting, etc.)
    // They're used to conditionally render things
    // Add the filteredContacts computed property to your Vue app
    computed: {
        filteredContacts() {
            return this.contacts.filter(contact => {
                return contact.name.toLowerCase().includes(this.searchContact.toLowerCase());
            });
        }
    },


    // Methods of the app
    methods: {

        // Check if the index matches the currentContact value
        isActiveContact(index) {
            return index === this.currentContact;
        },
        
        // Check if the index matches the clickedContact value
        isClickedContact(index) {
            return index === this.clickedContact;
        },

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

        getMessageTime(contact, index) {
            const message = contact.messages[index];

            if (message) {
                const dateParts = message.date.split(' ');
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


        setIndexContact(index, contact) {
            this.currentContact = index;
            this.clickedContact = index;
        },

        sendMessage() {
            if (this.newMessage.trim() !== '') {
                const currentDate = new Date();
                const formattedDate = `${(currentDate.getMonth() + 1)
                    .toString()
                    .padStart(2, '0')}/${currentDate.getDate().toString().padStart(2, '0')}/${currentDate.getFullYear()} ${currentDate.getHours().toString().padStart(2, '0')}:${currentDate.getMinutes().toString().padStart(2, '0')}:${currentDate.getSeconds().toString().padStart(2, '0')}`;

                const message = {
                    date: formattedDate,
                    message: this.newMessage,
                    status: 'sent',
                };

                this.contacts[this.currentContact].messages.push(message);
                this.newMessage = ''; // Clear the input field

                setTimeout(() => {
                    const response = {
                        date: formattedDate,
                        message: 'Ok',
                        status: 'received',
                    };
                    this.contacts[this.currentContact].messages.push(response);
                }, 1000);
            }
        },

        toggleDropdown(message) {
            message.showMenu = !message.showMenu;
        },
        
        deleteMessage(contactIndex, messageIndex) { 
            this.contacts[contactIndex].messages.splice(messageIndex, 1);
        },

    },

}).mount('#app');
