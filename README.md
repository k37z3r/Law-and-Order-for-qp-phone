# Law-and-Order-for-qp-phone<br>
Law and Order is an addon for qb-phone With this addon you can create and manage the laws, also every citizen can read these laws.<br><br>
<br>
<br>
© Copyright 2022 all rights reserved<br>
<br>
All contents, especially the source code of all files, are protected by copyright. All rights, including reproduction, publication, editing and translation, are reserved.<br>
A legal version for use can be purchased at https://bao.tebex.io/<br>
<br>
<br>
<br>
Law and Order is an addon for qb-phone<br>
With this addon you can create and manage the laws, also every citizen can read these laws.<br>
<br>
Files that nedd to be modified:<br>
./resource/[qb]/qb-phone/html/index.html<br>
./resource/[qb]/qb-phone/html/fxmanifest.lua



Installation:
1. Move the folder `./html/audio` to: `./resource/[qb]/[phone]/html/`
2. Move the file `./html/js/lawandorder.js` to: `./resource/[qb]/[phone]/html/js/`
3. Move the file `./html/css/lawandorder.css` to: `./resource/[qb]/[phone]/html/css/`
4. Move the file `./client/lawandorder.lua` to: `./resource/[qb]/[phone]/client/`
5. Move the file `./server/lawandorder.lua` to: `./resource/[qb]/[phone]/server/`
6. Open the file: `./resource/[qb]/qb-phone/html/index.html`
7. Search in the file for: `<link rel="stylesheet" href="./css/camera.css">`
8. After that, paste: `<link rel="stylesheet" href="./css/lawandorder.css">`
9. Search in the file for: `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" integrity="sha512-1sCRPdkRXhBV2PBLUdRb4tMg1w2YPf37qatUFeS7zlBy7jJI8Lf4VHwWfZZfpXtYSLy85pkm9GaYVYMfw5BC1A==" crossorigin="anonymous" referrerpolicy="no-referrer" />`
10. Replace it by: `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css" integrity="sha512-1sCRPdkRXhBV2PBLUdRb4tMg1w2YPf37qatUFeS7zlBy7jJI8Lf4VHwWfZZfpXtYSLy85pkm9GaYVYMfw5BC1A==" crossorigin="anonymous" referrerpolicy="no-referrer" />`
11. Search in the file for: `<div class="phone-application-container">`
12. After that, paste:`                     <div class="lawandorder-app">
                        <div class="lawandorderok" id="lawandorderok" style="display:none;"></div>
                        <div class="lawandorderok" id="lawandorderdeleted" style="display:none;"></div>
                        <div class="lawandorderok" id="lawsure" style="display:none;"></div>
                        <div class="lawandorder-app-header">Laws</div>
                        <div id="lawandorderloader"><i class="fas fa-scale-balanced"></i><br>Code of Law<p style="font-size: 1.8vh;padding-top: 5vh;">In any case, justice does not come into being without the Word.</p></div>
                        <div class="lawandorder-list"></div>
                        <div class="lawandorder-read"></div>
                        <div class="lawandorder-cats"></div>
                        <div class="lawandorder-create"></div>
                    </div>`
13. Search in the file for: `<script src="./js/camera.js"></script>`
14. After that, paste: `<script src="./js/lawandorder.js"></script>`
15. Save and close
16. Open the file: `./resource/[qb]/qb-phone/fxmanifest.lua`
17. Search in the file for: `'client/main.lua',`
18. After that, paste: `'client/lawandorder.lua',`
19. Search in the file for: `'server/main.lua'`
20. Replace it by: `'server/main.lua',
'server/lawandorder.lua'`
21. Search in the file for: `files {`
22. After that, paste: `'html/audio/*.mp3',`
23. Save and close
24. Open the file: `./ressource[qb]/qb-phone/config.lua`
25. Search in file for:`     ["camera"] = {
        app = "camera",
        color = "#AC1D2C",
        icon = "fas fa-camera",
        tooltipText = "Camera",
        tooltipPos = "bottom",
        job = false,
        blockedjobs = {},
        slot = 15,
        Alerts = 0,
    },`
26. After that, paste:`     ["lawandorde"] = {
        app = "lawandorder",
        color = "#AC1D2C",
        icon = "fas fa-scale-balanced",
        tooltipText = "Gesetze",
        tooltipPos = "bottom",
        job = false,
        blockedjobs = {},
        slot = 18,
        Alerts = 0,
    },`

27. Save and close

28. run lawandorder.sql

restart script (better restart server), DONE!



required:
qb-phone
