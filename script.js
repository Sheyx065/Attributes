document.addEventListener('DOMContentLoaded', () => {
        loadUsers();
    });

    function loadUsers() {
        const tableBody = document.querySelector('#userTable tbody');
        tableBody.innerHTML = '';

        let users = JSON.parse(localStorage.getItem('users')) || [];

        users.forEach(user => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${user.id}</td>
                <td>${user.name}</td>
                <td>${user.username}</td>
                <td>${user.email}</td>
                <td>${user.address.street}, ${user.address.city}, ${user.address.zipcode}</td>
                <td>${user.phone}</td>
                <td>${user.website}</td>
                <td>${user.company.name}</td>
                <td>${user.company.catchPhrase}</td>
                <td>${user.company.bs}</td>
                <td class="actions">
                    <button onclick="editUser(${user.id})">Edit</button>
                    <button onclick="deleteUser(${user.id})">Delete</button>
                </td>
            `;
            tableBody.appendChild(row);
        });
    }

    function deleteUser(userId) {
        let users = JSON.parse(localStorage.getItem('users')) || [];
        users = users.filter(user => user.id !== userId);
        localStorage.setItem('users', JSON.stringify(users));
        loadUsers();
    }

    function editUser(userId) {
        let users = JSON.parse(localStorage.getItem('users')) || [];
        const user = users.find(user => user.id === userId);
        if (user) {
            const newName = prompt("Enter new name:", user.name);
            const newUsername = prompt("Enter new username:", user.username);
            const newEmail = prompt("Enter new email:", user.email);
            const newStreet = prompt("Enter new street:", user.address.street);
            const newSuite = prompt("Enter new suite:", user.address.suite);
            const newCity = prompt("Enter new city:", user.address.city);
            const newZipcode = prompt("Enter new zipcode:", user.address.zipcode);
            const newPhone = prompt("Enter new phone:", user.phone);
            const newWebsite = prompt("Enter new website:", user.website);
            const newCompanyName = prompt("Enter new company name:", user.company.name);
            const newCatchPhrase = prompt("Enter new catch phrase:", user.company.catchPhrase);
            const newBs = prompt("Enter new BS:", user.company.bs);

            if (newName) user.name = newName;
            if (newUsername) user.username = newUsername;
            if (newEmail) user.email = newEmail;
            if (newStreet) user.address.street = newStreet;
            if (newSuite) user.address.suite = newSuite;
            if (newCity) user.address.city = newCity;
            if (newZipcode) user.address.zipcode = newZipcode;
            if (newPhone) user.phone = newPhone;
            if (newWebsite) user.website = newWebsite;
            if (newCompanyName) user.company.name = newCompanyName;
            if (newCatchPhrase) user.company.catchPhrase = newCatchPhrase;
            if (newBs) user.company.bs = newBs;

            localStorage.setItem('users', JSON.stringify(users));
            loadUsers();
        }
    }
