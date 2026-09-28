 document.addEventListener("DOMContentLoaded", function () {
        const hamburgerBtn = document.getElementById("bdaHamburgerBtn");
        const navMenu = document.getElementById("bdaNavMenu");
        const searchTrigger = document.getElementById("bdaMobileSearchTrigger");
        const searchForm = document.getElementById("bdaSearchForm");

        // 1. HEMBURG BUTTON CLICK(TO OPEN/CLOSE MOBILE MENU)
        if (hamburgerBtn && navMenu) {
            hamburgerBtn.addEventListener("click", function (event) {
                event.stopPropagation(); // TO STOP CLICK OUT
                
                // ON/OFF MENU 
                navMenu.classList.toggle("bda-menu-open");
                // ALL TREE LINE TO BE 'X' MARK
                hamburgerBtn.classList.toggle("bda-close-toggle");
                
                // SAFTY CHECK IF AT TIME OF PENING MENU SEARCH BOX IS OPEN THET IT WILL CLOSE THE SEARCH BOX 
                if (searchForm) {
                    searchForm.classList.remove("bda-search-open");
                }
            });
        }

        // 2. SEARCH ICON CLIC सर्च आइकॉन क्लिक (MOBILE SEARCH BOX ON/OFF)
        if (searchTrigger && searchForm) {
            searchTrigger.addEventListener("click", function (event) {
                event.stopPropagation(); // TO STOP CLICK TO GO OUT
                
                // SEARCH BOX ON/OFF
                searchForm.classList.toggle("bda-search-open");
                
                // SAFTY CHECK: AT TIME OF OPENING SEARCH IF MENU IS OPEN THEN IT WILL COLSE THE MENU
                if (navMenu && hamburgerBtn) {
                    navMenu.classList.remove("bda-menu-open");
                    hamburgerBtn.classList.remove("bda-close-toggle");
                }
            });
        }

        // 3. ON ANY WHERE ON SCREEN IS CLICK OPENED MENU IS CLOSSED
        document.addEventListener("click", function (event) {
            // अगर क्लिक मेनू या हैमबर्गर बटन के अंदर नहीं हुआ है, तो मेनू बंद करें
            if (navMenu && !navMenu.contains(event.target) && hamburgerBtn && !hamburgerBtn.contains(event.target)) {
                navMenu.classList.remove("bda-menu-open");
                hamburgerBtn.classList.remove("bda-close-toggle");
            }
            
            // अगर क्लिक सर्च फॉर्म या सर्च आइकॉन के अंदर नहीं हुआ है, तो सर्च बंद करें
            if (searchForm && !searchForm.contains(event.target) && searchTrigger && !searchTrigger.contains(event.target)) {
                searchForm.classList.remove("bda-search-open");
            }
        });
    });
//---------------------------------Flaoting Map button Ke Liye Script-------------------->
//document.addEventListener("DOMContentLoaded", function() {
    //const mapBtn = document.getElementById("openMapModal");
   // const mapModal = document.getElementById("mapModal");
   // const closeBtn = document.getElementById("closeMapModal");

    // बटन क्लिक करने पर मैप पॉपअप खोलें
    //if(mapBtn && mapModal) {
      //  mapBtn.addEventListener("click", function(e) {
          //  e.preventDefault();
         //   mapModal.style.display = "flex";
     //   });
    //}

    // X पर क्लिक करने पर बंद करें
   // if(closeBtn && mapModal) {
        //closeBtn.addEventListener("click", function() {
       //     mapModal.style.display = "none";
       // });
   // }

    // बाहर डार्क एरिया में क्लिक करने पर भी बंद करें
   // window.addEventListener("click", function(e) {
     //   if (e.target === mapModal) {
        //    mapModal.style.display = "none";
    //    }
   // });
//});
//---------Flaoting Map button script ends-----------//
//-------------Form & Image Script starts--------------------//
document.getElementById('data-node-form').addEventListener('submit', function(event) {
    // 1. Stop the page from reloading instantly
    event.preventDefault();

    // 2. Grab the inputs securely using disguised IDs
    const clientName = document.getElementById('entry-alpha').value.trim();
    const clientEmail = document.getElementById('entry-beta').value.trim();
    const clientPhone = document.getElementById('entry-delta').value.trim();
    const clientMessage = document.getElementById('entry-gamma').value.trim();
    
    const statusBox = document.getElementById('status-node-msg');

    // 3. Simple Check to make sure nothing is empty
    if (!clientName || !clientEmail || !clientPhone || !clientMessage) {
        statusBox.style.display = 'block';
        statusBox.style.color = '#ef4444'; // Red color error
        statusBox.innerText = 'Error: All fields are mandatory.';
        return;
    }

    // --- WHAT TO DO WITH DATA ---
    // You can process data here (e.g., send via API/Fetch requests).
    console.log("Logged Packets:", {
        name: clientName,
        email: clientEmail,
        phone: clientPhone,
        msg: clientMessage
    });

    // 4. Show success alert status on UI
    statusBox.style.display = 'block';
    statusBox.style.color = '#10b981'; // Green color success
    statusBox.innerText = `Success! Thank you ${clientName}, your request is executed.`;

    // 5. Clear out the input rows automatically
    this.reset();
});
//-------------Form & Image Script Ends--------------------//