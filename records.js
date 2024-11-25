let homeBtn = document.getElementById("home-btn");
let table = document.getElementById("records-table");
let entries = JSON.parse(localStorage.getItem("entries"));
let date = Object.keys(entries);

homeBtn.addEventListener("click", () => {
  window.location.replace("index.html");
});

table.innerHTML = `
<table>
    <tr>
        <th>Date</th>
        <th>Entries</th>
        <th>Total</th>
    </tr>
    <tr>
        <th>${date}</th>
        <th>${entries[date].values}</th>
        <th>${entries[date].total}</th>
    </tr>
</table>
`;
