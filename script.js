
        document.getElementById("toggle-user").addEventListener("change", function() {
            let isVITStudent = !this.checked;
            document.getElementById("user-type-label").textContent = isVITStudent ? "VIT Student" : "Non-VIT Student";
            document.getElementById("vit-fields").style.display = isVITStudent ? "block" : "none";
            document.getElementById("non-vit-fields").style.display = isVITStudent ? "none" : "block";
        });

        document.getElementById("login-btn").addEventListener("click", function () {
            let isVITStudent = document.getElementById("toggle-user").checked === false;
            let registerNo = document.getElementById("register-no").value.trim();
            let email = document.getElementById("email").value.trim();
            let password = document.getElementById("password").value.trim();

            if (isVITStudent) {
                if (registerNo === "23BPS1185" && password === "23BPS1185") {
                    window.location.href = "enter.html"; // Redirect to next page
                } else {
                    alert("Invalid Register Number or Password");
                }
            } else {
                if (email === "adityakumawat2003@gmail.com" && password === "23BPS1185") {
                    window.location.href = "enter.html"; // Redirect for Non-VIT Student
                } else {
                    alert("Invalid Email or Password");
                }
            }
        });