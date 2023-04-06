const modal = document.getElementById("modal");
       const btnModal = document.getElementById("item");

       //캔 누르면 모달 열기
       btnModal.addEventListener("click", e => {
            console.log('modal on');
            modal.style.display = "flex";
       })

       //바깥 클릭해서 모달 닫기
       modal.addEventListener("click", e => {
            const evTarget = e.target
            if(evTarget.classList.contains("modal-overlay")) {
                console.log('modal off')
                modal.style.display = "none"
            }
       })

       //ESC 눌러서 모달 닫기
       window.addEventListener("keyup", e => {
            if(modal.style.display === "flex" && e.key === "Escape") {
                modal.style.display = "none"
            }
       })