$(onReady);

let addedDivs = 1;

function onReady() {
    // Listeners
    $('#genBtn').on('click', handleGen);
    $('#genDiv').on('click', '.yellowBtn', handleYellow);
    $('#genDiv').on('click', '.deleteBtn', handleDelete);
}

// function to create a div on gen button click
function handleGen() {
    // append div containing: p with added div counter, 'yellow' button, and 'delete' button
    $('#genDiv').append(`
        <div class="addedDiv">
            <p>${addedDivs++}</p>
            <button class="yellowBtn">Yellow</button>
            <button class="deleteBtn">Delete</button>
        </div>
    `);
}

// yellow button function to make div background yellow
function handleYellow() {
    $(this).parent().addClass('yellowBack');
}

// delete button on click function to delete button's div
function handleDelete() {
    $(this).parent().remove();
}

