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
            // This property will be used to store the index of the current contact in the contacts array (see the computed property below)
            currentContact: 0,

            // Add the newMessage property to the data object and set it to an empty string
            // This property will be used to store the value of the input field used to send a new message (see the computed property below)
            // It is binded to the input field in the view (see the v-model directive in HTML)
            // It is also used to reset the input field after the message has been sent
            newMessage: '',

            // Clicked contact property to the data object and set it to null
            clickedContact: null,

            // Add the searchContact property to the data object and set it to an empty string
            // This property will be used to store the value of the input field used to filter the contacts list by name (see the computed property below)
            // It is binded to the input field in the view (see the v-model directive in HTML)
            searchContact: '',
        }
    },

    // Computed properties are used to handle complex calculations of information that need to be displayed in the view (e.g. filtering, sorting, etc.)
    // They're used to conditionally render (rendering means that the element will be added to the DOM, so to conditionally render means that the elements will be added to the DOM only if certain conditions are met) things 
    // Add the filteredContacts computed property to your Vue app
    computed: {
        // Method to filter the contacts list by name (see the v-model directive in HTML)
        filteredContacts() {
            // If the searchContact property is an empty string, return the contacts array as it is
            if (this.searchContact === '') {
                return this.contacts;
            }
            // Otherwise, return the contacts array filtered by name
            else {
                // The filter() method creates a new array with all the elements that pass the test implemented by the provided function (in this case, the test is if the name of the contact includes the searchContact value)
                // We use an arrow function, that takes the single contact Object from the contacts array as a parameter and returns the filtered array
                return this.contacts.filter(contact => {
                    // contact.name is the name of the contact (e.g. 'Michele')
                    // toLowerCase() is a method that converts a string to lowercase letters
                    // includes() is a method that checks if a string contains the characters of a specified string (it returns true if the string contains the characters, and false if not)
                    // this.searchContact is the value of the input field used to filter the contacts list by name (see the v-model directive in HTML)
                    // toLowerCase() is a method that converts a string to lowercase letters

                    // So, as a final result, if the name of the contact includes the searchContact value, the contact will be added to the filtered array
                    return contact.name.toLowerCase().includes(this.searchContact.toLowerCase());
                });
            }
        }
    },


    // Methods of the app
    methods: {

        // Check if the index matches the currentContact value
        isActiveContact(index) {
            // If the index matches the currentContact value, return true
            return index === this.currentContact;
        },

        // Check if the index matches the clickedContact value
        isClickedContact(index) {
            // If the index matches the clickedContact value, return true
            return index === this.clickedContact;
        },

        // getLastMessage is a method that returns the last message of a contact 
        // We take a single contact object as a parameter
        getLastMessage(contact) {
            // Then, we access the array of messages of the contact object and get the last message and store it in a variable called lastMessage
            // To access the last message, we use the length property of the messages array (the length property returns the number of elements in an array) and subtract 1 (because the index of the last element of an array is always the length of the array minus 1)
            // So, if the messages array has 3 elements, the last element will be at index 2 (3 - 1 = 2)
            // Object contact -> Messages array -> Last message
            const lastMessage = contact.messages[contact.messages.length - 1];
            // If the lastMessage variable is not  (undefined means the absence of a value we were looking for) (it means that the contact has at least one message), return the message. If it is undefined, return an empty string
            return lastMessage ? lastMessage.message : '';
        },

        // getLastMessageTime is a method that returns the time of the last message of a contact
        // We take a single contact object as a parameter
        getLastMessageTime(contact) {
            // Then, we access the array of messages of the contact object and get the last message and store it in a variable called lastMessage, just like we did in the getLastMessage method
            const lastMessage = contact.messages[contact.messages.length - 1];

            // If lastMessage is not undefined (undefined means the absence of a value we were looking for) (it means that the contact has at least one message), we get the date of the last message and format it to return only the time
            if (lastMessage) {
                // The date of the last message is stored in the date property of the lastMessage object (e.g. '10/01/2020 15:30:55')
                // We split the date string into an array of strings (e.g. ['10/01/2020', '15:30:55']), and we divide the date from the time using the space as a separator
                // We store the first element of the array (e.g. '10/01/2020') in a variable called dateParts
                const dateParts = lastMessage.date.split(' ');
                // We split the dateParts variable into an array of strings (e.g. ['10', '01', '2020'])
                // We use the destructuring assignment to store the first, second and third element of the array in three variables called day, month and year
                // We divide the day from the month from the year using the / as a separator
                const [day, month, year] = dateParts[0].split('/');
                // We split the second element of the dateParts array (e.g. '15:30:55') into an array of strings (e.g. ['15', '30', '55'])
                // We use the destructuring assignment to store the first, second and third element of the array in three variables called hour, minute and second
                // We divide the hour from the minute from the second using the : as a separator
                const [hour, minute, second] = dateParts[1].split(':');

                // We create a new Date object and pass the year, month, day, hour, minute and second as parameters
                // We subtract 1 from the month because the month parameter of the Date object starts from 0 (January is 0, February is 1, etc.)
                // We store the Date object in a variable called messageDate
                const messageDate = new Date(year, month - 1, day, hour, minute, second);

                // We format the time using the toLocaleTimeString() method
                // We pass 'it-IT' as a parameter to get the time in the Italian format (e.g. 15:30)
                // We pass an object as a second parameter to specify the format of the time
                // We set the hour and minute to be 2-digit (e.g. 15:30 instead of 15:3)
                const formattedTime = messageDate.toLocaleTimeString('it-IT', {
                    hour: '2-digit',
                    minute: '2-digit',
                });

                // We return the formattedTime variable
                return formattedTime;
            }
            // If lastMessage is undefined (undefined means the absence of a value we were looking for), we return an empty string
            return '';
        },

        // For each individual message, though, we want to see its own time, not the time of the last message

        // getMessageTime is a method that returns the time of a single message of a contact
        // We take two parameters: a single contact object and the index of the message we want to get the time of (the index is the position of the message in the messages array)
        getMessageTime(contact, index) {

            // We access the array of messages of the contact object and get the message at the specified index and store it in a variable called message
            const message = contact.messages[index];

            // If message is not undefined (undefined means the absence of a value we were looking for) (it means that the contact has at least one message), we get the date of the message and format it to return only the time
            if (message) {
                // The date of the message is stored in the date property of the message object (e.g. '10/01/2020 15:30:55')
                const dateParts = message.date.split(' ');

                // We split the dateParts variable into an array of strings (e.g. ['10', '01', '2020'])
                // We use the destructuring assignment to store the first, second and third element of the array in three variables called day, month and year
                // We divide the day from the month from the year using the / as a separator
                const [day, month, year] = dateParts[0].split('/');

                // We split the second element of the dateParts array (e.g. '15:30:55') into an array of strings (e.g. ['15', '30', '55'])
                // We use the destructuring assignment to store the first, second and third element of the array in three variables called hour, minute and second
                // We divide the hour from the minute from the second using the : as a separator
                const [hour, minute, second] = dateParts[1].split(':');

                // We create a new Date object and pass the year, month, day, hour, minute and second as parameters
                // We subtract 1 from the month because the month parameter of the Date object starts from 0 (January is 0, February is 1, etc.)
                // We store the Date object in a variable called messageDate
                const messageDate = new Date(year, month - 1, day, hour, minute, second);

                // We format the time using the toLocaleTimeString() method
                // We pass 'it-IT' as a parameter to get the time in the Italian format (e.g. 15:30)
                // We pass an object as a second parameter to specify the format of the time
                // We set the hour and minute to be 2-digit (e.g. 15:30 instead of 15:3)
                const formattedTime = messageDate.toLocaleTimeString('it-IT', {
                    hour: '2-digit',
                    minute: '2-digit',
                });

                // We return the formattedTime variable
                return formattedTime;
            }
            // If message is undefined (undefined means the absence of a value we were looking for), we return an empty string
            return '';
        },

        // We create a method called getLastAccess, that returns the last access of a contact
        // We take a single contact object as a parameter (the contact we want to get the last access of), and index, the position of the message in the messages array
        setIndexContact(index) {
            // We set the currentContact property to the index of the contact we clicked on (the index is the position of the contact in the contacts array)
            this.currentContact = index;
            // We set the clickedContact property to the index of the contact we clicked on (the index is the position of the contact in the contacts array)
            this.clickedContact = index;
        },

        // We create a method called sendMessage, that has the purpose to send a message we write, and to receive a response after 1 second
        sendMessage() {

            // We check if the newMessage property is not an empty string (we don't want to send empty messages)
            if (this.newMessage.trim() !== '') {

                // If the message is not an empty string

                // We create a new Date object and store it in a variable called currentDate
                const currentDate = new Date();
                // We format the date in the folllwing way:

                // ${...} is a template literal syntax in JavaScript that allows embedding expressions inside a string. It is used here to construct the formatted date string.

                // CREATING MONTH
                // (currentDate.getMonth() + 1).toString().padStart(2, '0') retrieves the month value from the currentDate object using the getMonth() method
                // Then, since months in JavaScript are zero-based (0 represents January, 1 represents February, and so on), we add 1 to the month value to get the correct month. 
                // The toString() method converts the resulting month value to a string
                // padStart(2, '0') ensures that the resulting string is at least two characters long by padding a leading '0' if necessary. This ensures that the month is represented with two digits.

                // CREATING DAY
                // currentDate.getDate().toString().padStart(2, '0') retrieves the day value from the currentDate object using the getDate() method. It converts the day value to a string and pads it with a leading '0' if necessary to ensure it is represented with two digits.

                // CREATING YEAR
                // currentDate.getFullYear() retrieves the full year value from the currentDate object.

                // CREATING HOUR, MINUTE AND SECOND
                // currentDate.getHours().toString().padStart(2, '0') retrieves the hour value from the currentDate object using the getHours() method. It converts the hour value to a string and pads it with a leading '0' if necessary to ensure it is represented with two digits.

                // currentDate.getMinutes().toString().padStart(2, '0') retrieves the minute value from the currentDate object using the getMinutes() method. It converts the minute value to a string and pads it with a leading '0' if necessary to ensure it is represented with two digits.

                // currentDate.getSeconds().toString().padStart(2, '0') retrieves the second value from the currentDate object using the getSeconds() method. It converts the second value to a string and pads it with a leading '0' if necessary to ensure it is represented with two digits

                const formattedDate = `${(currentDate.getMonth() + 1).toString().padStart(2, '0')}/${currentDate.getDate().toString().padStart(2, '0')}/${currentDate.getFullYear()} ${currentDate.getHours().toString().padStart(2, '0')}:${currentDate.getMinutes().toString().padStart(2, '0')}:${currentDate.getSeconds().toString().padStart(2, '0')}`;
                // So, now we have the full date in the following format: MM/DD/YYYY HH:MM:SS

                // We create a new message object and store it in a variable called message
                const message = {
                    // We give to this new message object all the properties that are shared with the other messages
                    date: formattedDate, // The date of the message that we just created
                    message: this.newMessage, // The text of the message
                    status: 'sent', // The status of the message (sent or received)
                    deletable: 'true', // The possibility to delete the message
                };

                // We push the message object to the messages array of the current contact
                this.contacts[this.currentContact].messages.push(message);

                // Finally, we clear the input field by setting the newMessage property to an empty string, so that we can write a new message in the input field
                this.newMessage = ''; 

                // We create a setTimeout function that will send the "Ok" reply text, and it will execute after 1 second
                setTimeout(() => {
                    // We create a message object, we call it response, and we store it in a variable
                    const response = {
                        // We give to this new message object all the properties that are shared with the other messages
                        date: formattedDate, // The date of the message that we just created
                        message: 'Ok', // The text of the message (in this case, the default reply text is "Ok")
                        status: 'received', // The status of the message (sent or received)
                        deletable: 'true', // The possibility to delete the message
                    };
                    // We push the response object to the messages array of the current contact
                    this.contacts[this.currentContact].messages.push(response);
                }, 1000);
            }
        },

        // toggleDropdown(contactIndex, messageIndex) is a method that toggles the dropdown menu of a message
        toggleDropdown(message) {
            // We negate the current value of the showDropdown property of the message object (true becomes false and viceversa)
            message.showMenu = !message.showMenu;
            // By doing so, we can toggle the dropdown menu of a message by clicking on it
        },

        // Method that allows us to delete a message
        // We pass the index of the contact and the index of the message as parameters
        deleteMessage(contactIndex, messageIndex) {
            // We check if the message is deletable 
            if (this.contacts[contactIndex].messages[messageIndex].deletable === 'true') {
                // If the message is deletable, we splice the message from the messages array of the current contact (the contact we clicked on)
                // We use splice instead of delete because splice removes the element from the array and returns it, while delete removes the element from the array but returns undefined
                // We remove one single message from the array (because of ", 1") and we start removing from the messageIndex (the position of the message in the messages array)
                this.contacts[contactIndex].messages.splice(messageIndex, 1);
            } 
            else {
                // If the message is not deletable, we show an alert
                alert('You cannot delete this message');
            }
        },
    },

}).mount('#app');
