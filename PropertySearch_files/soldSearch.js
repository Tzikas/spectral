// 4835 - SLD listings on IDX

function IdxLoadSldSearchParams(id) {
    var selFrame;
    selFrame = document.getElementById("optTimeFrame");

    if (selFrame != null) {
        if (id <= 2)
            selFrame.selectedIndex = id - 1;
        else
            selFrame.selectedIndex = 2;


        if (document.getElementById("rdSoldSearch").checked) {
            selFrame.disabled = false;

        }

        if (document.getElementById("rdForSale").checked) {

            selFrame.disabled = true;
        }
    }
}
function SaveTimeFrame(id) {

    document.getElementById("optTime").setAttribute("value", id);

}
function SaveTimeFrame() {

    document.getElementById("optTime").value = document.getElementById("optTimeFrame").value;
}


function toggleForSale(el) {
    var selFrame;
    selFrame = document.getElementById("optTimeFrame");

    if (el.checked && el.value == 'Y') {
        selFrame.disabled = false;
        SaveTimeFrame();
    }
    else

        selFrame.disabled = true;
}
// 4835 - SLD listings on IDX