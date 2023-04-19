const modal = document.getElementById("modal");
const btnModal = document.querySelectorAll(".item");

btnModal.forEach(btnModal => {
    btnModal.addEventListener("click", callback);
}) ;

function callback() {
    console.log('modal on');
    modal.style.display = "flex";
}
       

//바깥 클릭해서 모달 닫기
modal.addEventListener("click", e => {
    const evTarget = e.target
    if(evTarget.classList.contains("modal-overlay")) {
        console.log('modal off')
        modal.style.display = "none"
    }
})
