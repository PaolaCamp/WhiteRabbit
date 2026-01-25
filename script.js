

document.addEventListener('DOMContentLoaded', () => {
    // ----------------------------------------------------
    // I. RIFERIMENTI DOM E COSTANTI 
    // ----------------------------------------------------
    
    // Pulsanti Menu Principale
    const playButton = document.getElementById('play-button');
    const continueButton = document.getElementById('continue-button');
   
    // Contenitore Menu Centrale
    const mainMenuContent = document.getElementById('main-menu-content');
    
    // Menu Laterale (Side Menu)
    const menuToggle = document.getElementById('menu-toggle');
    const sideMenu = document.getElementById('side-menu');
    const closeSideMenuButton = document.getElementById('close-side-menu');
    
    // Modali Generali
    const settingsButtonTop = document.getElementById('settings-button');
    const settingsModal = document.getElementById('settings-modal');
    const closeSettingsButton = document.getElementById('close-settings-button');
    
    const storyButton = document.getElementById('story-button-from-menu'); 
    const storyModal = document.getElementById('story-modal');
    const closeStoryButton = document.getElementById('close-story-button');
    const phasesButton = document.getElementById('phases-button-from-menu');
    const phasesModal = document.getElementById('phases-modal');
    const closePhasesButton = document.getElementById('close-phases-button');
    
const storySlides = document.querySelectorAll('.story-slide');
const nextStoryButton = document.getElementById('next-story-button');
const prevStoryButton = document.getElementById('prev-story-button');
const storyDots = document.querySelectorAll('.dot');
let currentStoryPage = 0;

// Gestione del tasto MENU all'interno delle missioni
const missionMenuButtons = document.querySelectorAll('.mission-menu-trigger');

missionMenuButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        // Chiudiamo eventuali altri modali aperti per sicurezza
        closeAllModals(); 
        // Apriamo il menu laterale esistente
        sideMenu.classList.add('visible'); 
    });
});

const updateStoryUI = () => {
    // Aggiorna Slide
    storySlides.forEach((slide, index) => {
        slide.classList.toggle('active', index === currentStoryPage);
    });
    
    // Aggiorna Dots
    storyDots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentStoryPage);
    });

    // Gestione visibilità freccia PREV
    prevStoryButton.style.visibility = (currentStoryPage === 0) ? 'hidden' : 'visible';

    // Gestione testo tasto NEXT
    if (currentStoryPage === storySlides.length - 1) {
        nextStoryButton.textContent = 'FINISH';
        nextStoryButton.style.color = '#00FFFF';
        nextStoryButton.style.borderColor = '#00FFFF';
    } else {
        nextStoryButton.textContent = 'NEXT \u276F';
        nextStoryButton.style.color = '#FF00FF';
        nextStoryButton.style.borderColor = '#FF00FF';
    }
};

nextStoryButton.addEventListener('click', () => {
    if (currentStoryPage < storySlides.length - 1) {
        currentStoryPage++;
        updateStoryUI();
    } else {
        closeAllModals(); // Chiude al termine
    }
});

prevStoryButton.addEventListener('click', () => {
    if (currentStoryPage > 0) {
        currentStoryPage--;
        updateStoryUI();
    }
});
    // Elementi Cyber Glossary
    const glossaryButtonMenu = document.getElementById('glossary-button-from-menu');
    const glossaryModal = document.getElementById('glossary-modal');
    const closeGlossaryButton = document.getElementById('close-glossary-button');
    
    // Elementi Game Icons
    const iconsButtonMenu = document.getElementById('icons-button-from-menu');
    const iconsModal = document.getElementById('icons-modal');
    const closeIconsButton = document.getElementById('close-icons-button');
    
    // Elementi Legend
    const legendButtonMenu = document.getElementById('legend-button-from-menu');
    const legendModal = document.getElementById('legend-modal');
    const closeLegendButton = document.getElementById('close-legend-button');

    // AGGIUNTA: Pulsanti Legend In-game per le 3 fasi
    const legendIcon1 = document.getElementById('legend-icon-1');
    const legendIcon2 = document.getElementById('legend-icon-2');
    const legendIcon3 = document.getElementById('legend-icon-3');

    // Elementi Top Bar 
    const topBar = document.querySelector('.top-bar'); 

    // Schermate di Gioco
    const gameScreen1 = document.getElementById('game-screen-1');
    const gameScreen2 = document.getElementById('game-screen-2'); 
    const gameScreen3 = document.getElementById('game-screen-3'); 
    
    // Elementi Fase 1
    const missionMessageBox1 = gameScreen1.querySelector('.mission-message-box');
    const startGameButton = document.getElementById('start-game-button');
    const narratorBox1 = document.getElementById('narrator-box'); 
    const mainHotspot = document.getElementById('marco-monitor-hotspot'); 
    
    // Elementi Fase 2
    const serverCabinetHotspot = document.getElementById('server-cabinet-hotspot'); 
    const itServicePcHotspot = document.getElementById('server-cabinet-hotspot'); 
    const missionMessageBox2 = document.getElementById('mission-message-2');
    const startPhase2MsgButton = document.getElementById('start-phase-2-button-msg');
    const narratorBox2 = document.getElementById('narrator-box-2');
    const exitButton2 = document.getElementById('exit-icon-2');
    const glossaryIcon2 = document.getElementById('glossary-icon-2');

    // Elementi Fase 3
    const ceoMonitorHotspot = document.getElementById('ceo-monitor-hotspot');
    const narratorBox3 = document.getElementById('narrator-box-3');
    const narratorTextContent3 = narratorBox3 ? narratorBox3.querySelector('.narrator-text-content p') : null;
    const exitButton3 = document.getElementById('exit-icon-3');
    const glossaryIcon3 = document.getElementById('glossary-icon-3');


    // Riferimenti per l'aggiornamento del Mission Box (Fase 1)
    const missionMessageBoxTitle = missionMessageBox1.querySelector('.message-box-title');
    const missionMessageBoxP = missionMessageBox1.querySelector('.message-box-text');

    // Modifiche al Mission Box per la Fase 2 (per i sottolivelli)
    const missionMessageBox2Title = missionMessageBox2.querySelector('.message-box-title');
    const missionMessageBox2P = missionMessageBox2.querySelector('.message-box-text');
    const missionMessageBox2Button = missionMessageBox2.querySelector('.message-box-button');


    // Narrator Box Content (Fase 1 e Fase 2)
    const narratorTextContent1 = narratorBox1.querySelector('.narrator-text-content p');
    const narratorTextContent2 = narratorBox2.querySelector('.narrator-text-content p');

// Riferimenti ai nuovi bottoni volume
const volumeButtons = document.querySelectorAll('.volume-trigger-icon');
const bgMusic = new Audio('./musicCyber.mp3'); 
bgMusic.loop = true;
bgMusic.volume = 0.5;
const audioToggleSwitch = document.querySelector('#audio-toggle-switch input');


// 1. Riferimenti ai nuovi elementi
const volumeSlider = document.getElementById('volume-slider');
const volumeLabel = document.getElementById('volume-value');

// 2. Funzione per cambiare il volume
if (volumeSlider) {
    volumeSlider.addEventListener('input', (event) => {
        const volume = event.target.value;
        
        // Aggiorna il file audio
        if (bgMusic) {
            bgMusic.volume = volume;
        }

        // Aggiorna il testo nel menu (es: 85)
        if (volumeLabel) {
            volumeLabel.textContent = Math.round(volume * 100);
        }
        
        console.log(`Volume impostato a: ${volume}`);
    });
}

   // Riferimenti alle icone Glossario in-game
    const glossaryIcon1 = document.getElementById('glossary-icon');
    const glossaryIcon2Game = document.getElementById('glossary-icon-2');
    const glossaryIcon3Game = document.getElementById('glossary-icon-3');
    const exitButton = document.getElementById('exit-icon');

    // MODAL PUZZLE PASSWORD (Marco)
    const passwordModal = document.getElementById('password-modal');
    const passwordInput = document.getElementById('password-input');
    const confirmPasswordButton = document.getElementById('confirm-password-button');
    const feedbackMessage = document.getElementById('feedback-message');
    const closeTerminalButton = document.getElementById('close-terminal-button'); 
    const CORRECT_PASSWORD = "marco123";
    
    // MODAL PUZZLE FASE 2 (NVR IP)
    const itMonitorModal = document.getElementById('it-monitor-modal');
    const ipInput = document.getElementById('ip-input');
    const confirmIpButton = document.getElementById('confirm-ip-button');
    const ipFeedbackMessage = document.getElementById('ip-feedback-message');
    const closeItMonitorButton = document.getElementById('close-it-monitor-button');
    const CORRECT_IP = "192.168.1.250"; 

    // MODAL LEZIONE CREDENZIALI DEFAULT (FASE 2)
    const defaultCredsLessonModal = document.getElementById('default-creds-lesson-modal');
    const defaultCredsLearnedButton = document.getElementById('default-creds-learned-button');

    // MODAL LOGIN NVR (FASE 2, MISSIONE 2)
    const nvrLoginModal = document.getElementById('nvr-login-modal');
    const nvrUsernameInput = document.getElementById('nvr-username-input');
    const nvrPasswordInput = document.getElementById('nvr-password-input');
    const confirmNvrLoginButton = document.getElementById('confirm-nvr-login-button');
    const nvrFeedbackMessage = document.getElementById('nvr-feedback-message');
    const closeNvrLoginButton = document.getElementById('close-nvr-login-button');
    const NVR_CORRECT_USERNAME = "admin";
    const NVR_CORRECT_PASSWORD = "admin";
    
    // MODALE DECISIONE PATCH MANAGEMENT (RIUTILIZZATO PER CONFERMA DISATTIVAZIONE)
    const patchDecisionModal = document.getElementById('patch-decision-modal');
    const actionUpdateNow = document.getElementById('action-update-now');
    const actionIgnoreAndCrash = document.getElementById('action-ignore-and-crash');
    
    // Riferimenti per la manipolazione del contenuto del modale Patch Decision
    const patchDecisionBody = patchDecisionModal.querySelector('.decision-body');
    const patchDecisionTitle = patchDecisionModal.querySelector('.decision-title');
    const patchDecisionStatus = patchDecisionModal.querySelector('.decision-status');


    // MODALE LEZIONE PATCH MANAGEMENT
    const patchLessonModal = document.getElementById('patch-lesson-modal');
    const patchLearnedButton = document.getElementById('patch-learned-button');
    const patchLessonTitle = patchLessonModal.querySelector('.lesson-title');
    const patchLessonBody = patchLessonModal.querySelector('.lesson-body');


    // MODAL LEZIONE 1 (Password Spraying)
    const lessonModal = document.getElementById('lesson-modal');           
    const lessonLearnedButton = document.getElementById('lesson-learned-button'); 

    // MODAL DECISIONE (USB Baiting)
    const decisionModal = document.getElementById('decision-modal');
    const choiceInsertUsb = document.getElementById('choice-insert-usb');
    const choiceDeclineUsb = document.getElementById('choice-decline-usb');
    
    // MODAL LEZIONE FINALE FASE 1 (Stuxnet)
    const stuxnetLessonModal = document.getElementById('stuxnet-lesson-modal'); 
    const stuxnetLearnedButton = document.getElementById('stuxnet-learned-button'); 
    
    // RIFERIMENTI PER MODAL COMPLETO FASE (Riutilizzo per la fine della Fase 2)
    const phaseCompleteModal = document.getElementById('phase-complete-modal');
    const exitToMenuButton = document.getElementById('exit-to-menu-button');
    const startPhase2Button = document.getElementById('start-phase-2-button');
    
    // Riferimenti ai contenuti interni del Phase Complete Modal
    const completeTitle = phaseCompleteModal.querySelector('.complete-title');
    const completeStatus = phaseCompleteModal.querySelector('.top-right-settings');
    const completeBody = phaseCompleteModal.querySelector('.complete-body');
    const completeDecisionButtons = phaseCompleteModal.querySelector('.complete-decision-buttons');
    
    // MODAL PUZZLE CRITTOGRAFIA CAESAR (FASE 3)
    const caesarCipherModal = document.getElementById('caesar-cipher-modal');
    const cipherKeyInput = document.getElementById('cipher-key-input');
    const confirmCipherKeyButton = document.getElementById('confirm-cipher-key-button');
    const cipherFeedbackMessage = document.getElementById('cipher-feedback-message');
    const decryptedOutput = document.getElementById('decrypted-output');
    const closeCeoMonitorButton = document.getElementById('close-ceo-monitor-button');
    const ENCRYPTED_TEXT_ELEMENT = document.getElementById('encrypted-text-content');
    const CORRECT_CIPHER_KEY = 8; 
    const DECRYPTED_TEXT = "OUR SECRETS ARE POWERFUL. DECRYPT DECEIT.";
    
    // NUOVO: MODALE LEZIONE CAESAR (FASE 3)
    const caesarLessonModal = document.getElementById('caesar-lesson-modal');
    const caesarLearnedButton = document.getElementById('caesar-learned-button');

    // MODAL VITTORIA FINALE
    const finalWinModal = document.getElementById('final-win-modal');
    const finalExitMenuButton = document.getElementById('final-exit-menu');
    
    // NUOVO: MODALE DEBRIEFING/FALLIMENTO AZIENDALE
    const debriefingModal = document.getElementById('debriefing-modal');
    const closeDebriefingButton = document.getElementById('close-debriefing-button');


    // Variabile di stato per la Missione (Missione IP/Creds -> Missione Patch)
    let isPatchMissionActive = false;
    

    // ----------------------------------------------------
    // II. FUNZIONI DI CHIUSURA/APERTURA (CENTRALIZZATE)
    // ----------------------------------------------------

    // Funzioni di chiusura dei singoli modali/menu
    const closeSideMenu = () => { if(sideMenu) sideMenu.classList.remove('visible'); };
    const closeSettingsModal = () => { if(settingsModal) settingsModal.classList.add('hidden'); };
    const closeStoryModal = () => { if(storyModal) storyModal.classList.add('hidden'); };
    const closePhasesModal = () => { if(phasesModal) phasesModal.classList.add('hidden'); };
    const closeGlossaryModal = () => { if(glossaryModal) glossaryModal.classList.add('hidden'); };
    const closeIconsModal = () => { if(iconsModal) iconsModal.classList.add('hidden'); };
    const closeLegendModal = () => { if(legendModal) legendModal.classList.add('hidden'); };

    const closePasswordModal = () => { 
        if(passwordModal) passwordModal.classList.add('hidden'); 
        if(feedbackMessage) feedbackMessage.textContent = '';
        if(passwordInput) passwordInput.value = '';         
    };
    const closeLessonModal = () => { if(lessonModal) lessonModal.classList.add('hidden'); };
    const closeDecisionModal = () => { if(decisionModal) decisionModal.classList.add('hidden'); };
    const closeStuxnetLessonModal = () => { if(stuxnetLessonModal) stuxnetLessonModal.classList.add('hidden'); };
    const closePhaseCompleteModal = () => { if(phaseCompleteModal) phaseCompleteModal.classList.add('hidden'); }; 
    const closeItMonitorModal = () => { 
        if(itMonitorModal) itMonitorModal.classList.add('hidden');
        if(ipFeedbackMessage) ipFeedbackMessage.textContent = '';
        if(ipInput) ipInput.value = '';
    };
    const closeDefaultCredsLessonModal = () => { 
        if(defaultCredsLessonModal) defaultCredsLessonModal.classList.add('hidden');
    };
    const closeNvrLoginModal = () => { 
        if(nvrLoginModal) nvrLoginModal.classList.add('hidden');
        if(nvrFeedbackMessage) nvrFeedbackMessage.textContent = '';
        if(nvrPasswordInput) nvrPasswordInput.value = '';
    };
    const closePatchDecisionModal = () => { 
        if(patchDecisionModal) patchDecisionModal.classList.add('hidden');
    };
    const closePatchLessonModal = () => { 
        if(patchLessonModal) patchLessonModal.classList.add('hidden');
    };
    const closeCaesarCipherModal = () => { 
        if(caesarCipherModal) caesarCipherModal.classList.add('hidden');
        if(cipherFeedbackMessage) cipherFeedbackMessage.textContent = '';
        if(decryptedOutput) decryptedOutput.textContent = '';
        if(cipherKeyInput) cipherKeyInput.value = '';
    };
    const closeCaesarLessonModal = () => { if(caesarLessonModal) caesarLessonModal.classList.add('hidden'); };
    const closeFinalWinModal = () => { if(finalWinModal) finalWinModal.classList.add('hidden'); };
    const closeDebriefingModal = () => { if(debriefingModal) debriefingModal.classList.add('hidden'); };


    // Funzione centralizzata per chiudere tutti i modali
    const closeAllModals = () => {
        closeSideMenu();
        closeSettingsModal();
        closeStoryModal();
        closePhasesModal();
        closeGlossaryModal();
        closeIconsModal();
        closeLegendModal(); 
        closePasswordModal();
        closeLessonModal();
        closeDecisionModal();
        closeStuxnetLessonModal();
        closePhaseCompleteModal(); 
        closeItMonitorModal(); 
        closeDefaultCredsLessonModal(); 
        closeNvrLoginModal(); 
        closePatchDecisionModal(); 
        closePatchLessonModal(); 
        closeCaesarCipherModal();
        closeCaesarLessonModal();
        closeFinalWinModal();
        closeDebriefingModal();
    };

    const openSideMenu = () => { closeAllModals(); if(sideMenu) sideMenu.classList.add('visible'); };
    const openSettingsModal = () => { closeAllModals(); if(settingsModal) settingsModal.classList.remove('hidden'); };
    const openStoryModal = () => { closeAllModals(); if(storyModal) storyModal.classList.remove('hidden'); };
    const openPhasesModal = () => { closeAllModals(); if(phasesModal) phasesModal.classList.remove('hidden'); };
    const openGlossaryModal = () => { closeAllModals(); if(glossaryModal) glossaryModal.classList.remove('hidden'); };
    const openIconsModal = () => { closeAllModals(); if(iconsModal) iconsModal.classList.remove('hidden'); };
    const openLegendModal = () => { 
        closeAllModals(); 
        if(legendModal) legendModal.classList.remove('hidden'); 
        // Logica per caricare le immagini solo quando il modale si apre
        loadLegendImages();
    };

    const openPasswordModal = () => { closeAllModals(); if(passwordModal) passwordModal.classList.remove('hidden'); if(passwordInput) passwordInput.focus(); };
    const openLessonModal = () => { closeAllModals(); if(lessonModal) lessonModal.classList.remove('hidden'); };
    const openDecisionModal = () => { closeAllModals(); if(decisionModal) decisionModal.classList.remove('hidden'); };
    const openStuxnetLessonModal = () => { closeAllModals(); if(stuxnetLessonModal) stuxnetLessonModal.classList.remove('hidden'); };
    const openPhaseCompleteModal = () => { closeAllModals(); if(phaseCompleteModal) phaseCompleteModal.classList.remove('hidden'); };
    const openItMonitorModal = () => { 
        closeAllModals();
        if(itMonitorModal) itMonitorModal.classList.remove('hidden');
        if(ipInput) ipInput.focus();
    };
    const openDefaultCredsLessonModal = () => { 
        closeAllModals();
        if(defaultCredsLessonModal) defaultCredsLessonModal.classList.remove('hidden');
    };
    const openNvrLoginModal = () => { 
        closeAllModals();
        if(nvrLoginModal) nvrLoginModal.classList.remove('hidden');
        if(nvrPasswordInput) nvrPasswordInput.focus(); 
    };
    const openPatchDecisionModal = () => { 
        closeAllModals();
        
        // Configurazione per Patch Management (Riavvio Forzato) - (Missione 2)
        if (patchDecisionTitle) patchDecisionTitle.textContent = "IT SERVICE DESK: CRITICAL ALERT";
        if (patchDecisionStatus) patchDecisionStatus.textContent = "PATCH MANAGEMENT REQUIRED";
        if (patchDecisionBody) patchDecisionBody.innerHTML = `
            <h3>System Vulnerability: Delayed OS Update</h3>
            <p>
                The IT Service PC (linked to the NVR surveillance system) displays a CRITICAL OS UPDATE PENDING warning. The system is unstable and requires a forced action to continue.
            </p>
            <p>
                <strong>Goal:</strong> Force System Reboot to momentarily disable NVR surveillance, using the unstable OS patch mechanism as an exploit vector.
            </p>
            <div class="decision-buttons" style="margin-top: 20px;">
                <button id="action-update-now" class="decision-button danger">UPDATE NOW (Forced Reboot)</button>
                <button id="action-ignore-and-crash" class="decision-button safe">CLOSE WARNING (Crash System)</button>
            </div>
        `;
        // Ricollocare i listener per i pulsanti Patch
        if (patchDecisionModal) {
            // Rimuove vecchi listener
            const oldUpdateBtn = patchDecisionModal.querySelector('#action-update-now');
            const oldCrashBtn = patchDecisionModal.querySelector('#action-ignore-and-crash');

            if (oldUpdateBtn) oldUpdateBtn.removeEventListener('click', () => handlePatchDecision("UPDATE NOW"));
            if (oldCrashBtn) oldCrashBtn.removeEventListener('click', () => handlePatchDecision("CRASH SYSTEM"));
            
            // Aggiunge i nuovi listener
            const updateBtn = patchDecisionModal.querySelector('#action-update-now');
            const crashBtn = patchDecisionModal.querySelector('#action-ignore-and-crash');
            
            if (updateBtn) updateBtn.addEventListener('click', () => handlePatchDecision("UPDATE NOW"));
            if (crashBtn) crashBtn.addEventListener('click', () => handlePatchDecision("CRASH SYSTEM"));
        }
        
        if(patchDecisionModal) patchDecisionModal.classList.remove('hidden');
    };
    
    const openPatchLessonModal = () => { 
        closeAllModals();
        if(patchLessonModal) patchLessonModal.classList.remove('hidden');
    };
    
    const openCaesarCipherModal = () => {
        closeAllModals();
        if(caesarCipherModal) caesarCipherModal.classList.remove('hidden');
        if(cipherKeyInput) cipherKeyInput.focus();
    };
    
    const openCaesarLessonModal = () => {
        closeAllModals();
        if(caesarLessonModal) caesarLessonModal.classList.remove('hidden');
    };
    
    const openFinalWinModal = () => {
        closeAllModals();
        if(finalWinModal) finalWinModal.classList.remove('hidden');
    };
    
    const openDebriefingModal = () => {
        closeAllModals();
        if(debriefingModal) debriefingModal.classList.remove('hidden');
    };

    /**
     * NUOVO: Funzione per caricare le immagini solo quando il modale Legend è aperto.
     */
    const loadLegendImages = () => {
        const imageElements = document.querySelectorAll('#legend-modal .clue-image');
        imageElements.forEach(img => {
            const src = img.getAttribute('data-src');
            if (src && !img.getAttribute('src')) {
                img.setAttribute('src', src);
                console.log(`Immagine caricata: ${src}`);
            }
        });
    };


    const hideTopBar = () => {
        if (topBar) {
            topBar.classList.add('hidden');
        }
    };

    const showTopBar = () => {
        if (topBar) {
            topBar.classList.remove('hidden');
        }
    };
    
    const hideMainMenuContent = () => {
        if (mainMenuContent) {
            mainMenuContent.classList.add('hidden');
        }
    };

    const showMainMenuContent = () => {
        if (mainMenuContent) {
            mainMenuContent.classList.remove('hidden');
        }
    };

// Gestisce l'attivazione/disattivazione della musica dalle impostazioni
if (audioToggleSwitch) {
    audioToggleSwitch.addEventListener('change', () => {
        if (audioToggleSwitch.checked) {
            bgMusic.play();
        } else {
            bgMusic.pause();
        }
    });
}
    // ----------------------------------------------------
    // III. LOGICA DI GIOCO
    // ----------------------------------------------------

    const startGame = () => {
        closeAllModals();
        hideTopBar(); 
        hideMainMenuContent(); 
        
        // --- PREPARAZIONE FASE 1 ---
        if(gameScreen2) gameScreen2.classList.add('hidden'); 
        if(gameScreen3) gameScreen3.classList.add('hidden'); 
        if(gameScreen1) gameScreen1.classList.remove('hidden'); 
        
        // Reset Narrator content per la Missione 1
        if(narratorTextContent1) narratorTextContent1.textContent = "Goal: Network Credentials. Think like a striker. Where are the weaknesses hidden? Find MARCO's location and log in to his system.";
        
        // Reset per la prima missione (Monitor Hotspot)
        if(missionMessageBoxTitle) missionMessageBoxTitle.innerHTML = "MISSION IN PROGRESS: PHASE 1<br>PHYSICAL ENTRY";
        if(missionMessageBoxP) missionMessageBoxP.innerHTML = "OmniCorp HQ, 02:00 AM.<br>You have gained access to the building.<br>Begin the search for network credentials.";
        if(startGameButton) startGameButton.textContent = "START";

        if(mainHotspot) mainHotspot.removeEventListener('click', openDecisionModal); 
        if(mainHotspot) mainHotspot.addEventListener('click', openPasswordModal); 

        // Reset stile Hotspot a Monitor
        if(mainHotspot) {
            mainHotspot.style.width = '150px'; 
            mainHotspot.style.height = '100px';
            mainHotspot.style.top = '55%'; 
            mainHotspot.style.left = '50%';
            mainHotspot.style.transform = 'translate(-50%, -50%)'; 
        }

        if (missionMessageBox1) {
            missionMessageBox1.classList.remove('hidden'); 
        }
        if (narratorBox1) {
            narratorBox1.classList.add('hidden'); 
        }
    };
    
    // FUNZIONE PER AVVIARE LA FASE 2
    const startGamePhase2 = () => {
        closeAllModals();
        hideTopBar();
        hideMainMenuContent(); 

        // Nasconde la Fase 1 e la Fase 3, mostra la Fase 2
        if(gameScreen1) gameScreen1.classList.add('hidden');
        if(gameScreen3) gameScreen3.classList.add('hidden');
        if(gameScreen2) gameScreen2.classList.remove('hidden');

        // Imposta il Narrator Box della Fase 2 con l'obiettivo iniziale
        if(narratorTextContent2) narratorTextContent2.textContent = "Goal: Access Control. The target is the central server cabinet. Look for weak access points, physical locks, or network vulnerabilities.";
        if(narratorBox2) narratorBox2.classList.add('hidden'); 

        // Mostra il pop-up iniziale della Fase 2
        if (missionMessageBox2) {
            missionMessageBox2Title.innerHTML = "MISSION IN PROGRESS: PHASE 2<br>NETWORK EXPLOITATION";
            missionMessageBox2P.innerHTML = "OmniCorp IT Department.<br>You are inside the network perimeter.<br>Objective: Bypass surveillance controls and establish a covert network connection.";
            missionMessageBox2Button.textContent = "START PHASE 2";
            missionMessageBox2.classList.remove('hidden');
        }
        
        // Collega l'hotspot alla Missione 1: IP/Credenziali NVR
        if(itServicePcHotspot) {
            // Rimuove vecchi listener
            itServicePcHotspot.removeEventListener('click', openPatchDecisionModal);
            // Assegna il listener per la NUOVA Missione 1: IP/Credenziali
            itServicePcHotspot.addEventListener('click', openItMonitorModal);
        }
        
        // Reset variabili di stato
        isPatchMissionActive = false;

        console.log("Fase 2 avviata. Missione 1: IP/Credenziali NVR.");
    };
    
    // FUNZIONE PER AVVIARE LA FASE 3
    const startGamePhase3 = () => {
        closeAllModals();
        hideTopBar();
        hideMainMenuContent();

        // Nasconde la Fase 1 e 2, mostra la Fase 3
        if(gameScreen1) gameScreen1.classList.add('hidden');
        if(gameScreen2) gameScreen2.classList.add('hidden');
        if(gameScreen3) gameScreen3.classList.remove('hidden');
        
        // Imposta il Narrator Box della Fase 3
        if(narratorTextContent3) narratorTextContent3.textContent = "Goal: Chimera Project. Access the main system and decrypt the files. The key must be a small, easily guessable number. Be quick.";
        if(narratorBox3) narratorBox3.classList.remove('hidden');
        
        // Collega l'hotspot al puzzle di decrittazione
        if(ceoMonitorHotspot) {
            ceoMonitorHotspot.removeEventListener('click', null); 
            ceoMonitorHotspot.addEventListener('click', openCaesarCipherModal);
        }
        
        console.log("Fase 3 avviata. Missione: Caesar Cipher.");
    };

// Funzione click per i bottoni volume
volumeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        if (bgMusic.paused) {
            bgMusic.play().catch(e => console.log("Interagire col gioco per l'audio"));
            if (audioToggleSwitch) audioToggleSwitch.checked = true;
            updateVolumeUI(true);
        } else {
            bgMusic.pause();
            if (audioToggleSwitch) audioToggleSwitch.checked = false;
            updateVolumeUI(false);
        }
    });
});

// Funzione per aggiornare l'icona in tutte le schermate
function updateVolumeUI(isPlaying) {
    volumeButtons.forEach(btn => {
        const iconText = btn.querySelector('.icon-text');
        iconText.textContent = isPlaying ? '🔊' : '🔈';
    });
}

// Sincronizzazione se l'utente cambia lo stato direttamente dai Settings
if (audioToggleSwitch) {
    audioToggleSwitch.addEventListener('change', (e) => {
        updateVolumeUI(e.target.checked);
    });
}
    /**
     * Nasconde SOLO il pop-up del messaggio e gestisce la transizione dell'Hotspot.
     */
    const hideMessageBox = (event) => {
        const targetButton = event.target;
        
        // --- LOGICA FASE 1 (Entrata / Baiting) ---
        if (targetButton === startGameButton && gameScreen1 && !gameScreen1.classList.contains('hidden')) {
            if (missionMessageBox1 && !missionMessageBox1.classList.contains('hidden')) {
                missionMessageBox1.classList.add('hidden');
                const currentTitle = missionMessageBoxTitle.textContent.trim();
                
                if (currentTitle.includes('NETWORK ENTRY POINT')) {
                     // Missione 2 FASE 1 (USB Baiting)
                    if (mainHotspot) {
                        mainHotspot.removeEventListener('click', openPasswordModal); 
                        mainHotspot.addEventListener('click', openDecisionModal); 
                        
                        // Stile Hotspot USB 
                        mainHotspot.style.width = '70px'; 
                        mainHotspot.style.height = '70px';
                        mainHotspot.style.top = '75%'; 
                        mainHotspot.style.left = '40%'; 
                        mainHotspot.style.transform = 'translate(-50%, -50%)'; 
                    }
                    
                    if (narratorBox1) {
                        narratorTextContent1.textContent = "Goal: Network Connection. The 'Baiting' Protocol is a social engineering vulnerability. Make the right choice, Agent.";
                        narratorBox1.classList.remove('hidden');
                    }
                } else {
                    // Missione 1 FASE 1 (Monitor Password)
                    if (narratorBox1) {
                        narratorBox1.classList.remove('hidden');
                    }
                }
            }
        }
        
        // --- LOGICA FASE 2 (Introduzione Fase / Sottomissioni) ---
        if (targetButton === startPhase2MsgButton && gameScreen2 && !gameScreen2.classList.contains('hidden')) {
            if (missionMessageBox2 && !missionMessageBox2.classList.contains('hidden')) {
                missionMessageBox2.classList.add('hidden');
                
                if (narratorBox2) {
                    if (isPatchMissionActive) {
                        // Se la Missione 2 (Patch Management) è attiva
                        narratorTextContent2.textContent = "IT System unstable! Quickly find the update prompt (hotspot) to exploit system instability and disable the NVR feed.";
                    } else {
                        // Missione 1 (IP/Credenziali)
                        narratorTextContent2.textContent = "Goal: NVR Access. Find the NVR IP and predict the default credentials using the clues in the environment.";
                    }
                    narratorBox2.classList.remove('hidden'); 
                }
            }
        }
    };

    // Prepara e mostra il messaggio della Missione 2 FASE 1 (USB Baiting) - Logica invariata
    const showMissionMessage2 = () => {
        if(missionMessageBoxTitle) missionMessageBoxTitle.innerHTML = "MISSION IN PROGRESS: PHASE 1<br>NETWORK ENTRY POINT";
        if(missionMessageBoxP) missionMessageBoxP.innerHTML = "Status: Credentials acquired.<br>Objective: You must now establish a mainnet access point. <br>Look for an unattended baiting device or free Ethernet access.";
        if(startGameButton) startGameButton.textContent = "CONTINUE";

        if (narratorBox1) {
            narratorBox1.classList.add('hidden');
        }

        if(missionMessageBox1) missionMessageBox1.classList.remove('hidden'); 
    };
    
    // Funzione per mostrare il Messaggio Introduttivo Patch Management (Missione 2, Fase 2)
    const showPatchManagementMissionMessage = () => {
        if(missionMessageBox2Title) missionMessageBox2Title.innerHTML = "MISSION IN PROGRESS: PHASE 2<br>PATCH MANAGEMENT EXPLOIT (M2)";
        if(missionMessageBox2P) missionMessageBox2P.innerHTML = "Status: NVR Access Secured.<br>Objective: Force the NVR system to reboot to apply the camera deactivation command. Exploit system instability via the IT Service PC.";
        if(missionMessageBox2Button) missionMessageBox2Button.textContent = "CONTINUE";

        if (narratorBox2) narratorBox2.classList.add('hidden');
        if (missionMessageBox2) missionMessageBox2.classList.remove('hidden');

        isPatchMissionActive = true;
        
        // Ricollega l'hotspot per aprire il modale Patch Management
        if(itServicePcHotspot) {
            itServicePcHotspot.removeEventListener('click', openItMonitorModal); 
            itServicePcHotspot.addEventListener('click', openPatchDecisionModal); 
        }
        
        console.log("Missione 2: Patch Management attivata. Hotspot collegato al modale Patch.");
    }

    // Funzione per validare la password (FASE 1) - Logica invariata
    const validatePassword = () => {
        const enteredPassword = passwordInput.value.trim();

        if (enteredPassword === CORRECT_PASSWORD) {
            if(feedbackMessage) feedbackMessage.textContent = " ACCESS GRANTED: Initial credentials acquired.";
            if(feedbackMessage) feedbackMessage.classList.add('success-text');
            if(feedbackMessage) feedbackMessage.classList.remove('error-text');
            
            setTimeout(() => {
                openLessonModal(); 
            }, 1000);
            
        } else {
            if(feedbackMessage) feedbackMessage.textContent = " ERROR: Authentication failed. Try again.";
            if(feedbackMessage) feedbackMessage.classList.add('error-text');
            if(feedbackMessage) feedbackMessage.classList.remove('success-text');
            if(passwordInput) passwordInput.value = '';
        }
    };

    // Funzione per validare l'IP (FASE 2, Missione 1 - Step 1)
    const validateIp = () => {
        const enteredIp = ipInput.value.trim();
        
        if (enteredIp === CORRECT_IP) {
            if(ipFeedbackMessage) ipFeedbackMessage.textContent = " NVR ACCESS GRANTED: Surveillance system IP confirmed. Accessing login portal...";
            if(ipFeedbackMessage) ipFeedbackMessage.classList.add('success-text');
            if(ipFeedbackMessage) ipFeedbackMessage.classList.remove('error-text');
            
            // Reindirizza al login NVR 
            setTimeout(() => {
                closeItMonitorModal();
                openNvrLoginModal();
            }, 1000);

        } else {
            if(ipFeedbackMessage) ipFeedbackMessage.textContent = " ERROR: Invalid IP address or NVR not reachable at this address.";
            if(ipFeedbackMessage) ipFeedbackMessage.classList.add('error-error');
            if(ipFeedbackMessage) ipFeedbackMessage.classList.remove('success-text');
            if(ipInput) ipInput.value = '';
        }
    };
    
    // Funzione per il Login NVR (FASE 2, Missione 1 - Step 2)
    const validateNvrLogin = () => {
        const enteredUsername = nvrUsernameInput.value.trim();
        const enteredPassword = nvrPasswordInput.value.trim();

        if (enteredUsername === NVR_CORRECT_USERNAME && enteredPassword === NVR_CORRECT_PASSWORD) {
            if(nvrFeedbackMessage) nvrFeedbackMessage.textContent = " ACCESS GRANTED: NVR System compromised. Initial phase complete.";
            if(nvrFeedbackMessage) nvrFeedbackMessage.classList.add('success-text');
            if(nvrFeedbackMessage) nvrFeedbackMessage.classList.remove('error-text');
            
            // Missione 1 (IP/Credenziali) COMPLETA. Si va alla lezione Credenziali Default (che introduce la M2)
            setTimeout(() => {
                closeNvrLoginModal();
                openDefaultCredsLessonModal(); 
            }, 1500);

        } else {
            if(nvrFeedbackMessage) nvrFeedbackMessage.textContent = " ACCESS DENIED: Incorrect credentials. Try again.";
            if(nvrFeedbackMessage) nvrFeedbackMessage.classList.add('error-text');
            if(nvrFeedbackMessage) nvrFeedbackMessage.classList.remove('success-text');
            if(nvrPasswordInput) nvrPasswordInput.value = '';
        }
    };
    
    // Gestione della Decisione Patch Management (Missione 2)
    const handlePatchDecision = (actionType) => {
        closePatchDecisionModal();
        
        console.log(`Azione Eseguita: ${actionType}. Riavvio forzato del sistema.`);
        
        // 1. Apre il modale della lezione sul Patch Management (Missione 2 completa)
        if (patchLessonTitle) patchLessonTitle.textContent = "RISK ASSESSMENT: VULNERABILITY EXPLOITED (PATCH MANAGEMENT)";

        setTimeout(openPatchLessonModal, 500);

        if (narratorBox2) narratorBox2.classList.add('hidden');
    };
    
    // Funzione per la Decrittazione Caesar Cipher (FASE 3)
    const handleCaesarCipher = () => {
        const enteredKey = parseInt(cipherKeyInput.value.trim());

        // Validazione della chiave
        if (isNaN(enteredKey) || enteredKey < 1 || enteredKey > 25) {
            if(cipherFeedbackMessage) cipherFeedbackMessage.textContent = " ERROR: Invalid key. Enter a number between 1 and 25.";
            if(cipherFeedbackMessage) cipherFeedbackMessage.classList.add('error-text');
            if(cipherFeedbackMessage) cipherFeedbackMessage.classList.remove('success-text');
            if(decryptedOutput) decryptedOutput.textContent = '';
            return;
        }

        // Decrittazione (semplificata per logica di gioco)
        // La chiave corretta è 8 (ottenuta dal conteggio delle 8 parole della frase criptata)
        // L'input corretto è 8 (e NON 3 come impostato precedentemente nel codice, che ho corretto qui)
        const CORRECT_CIPHER_KEY_FROM_CLUE = 8;
        
        if (enteredKey === CORRECT_CIPHER_KEY_FROM_CLUE) {
            if(cipherFeedbackMessage) cipherFeedbackMessage.textContent = " DECRYPTION SUCCESSFUL. Project Chimera files secured.";
            if(cipherFeedbackMessage) cipherFeedbackMessage.classList.add('success-text');
            if(cipherFeedbackMessage) cipherFeedbackMessage.classList.remove('error-text');
            
            // La frase "JVY ZVYLJLZ ZHYL YFSLT TLY. GLZJVY KL JLZZ." decifrata con chiave 8 è:
            // "OUR SECRETS ARE POWERFUL BUT WEAK. DECRYPT DECEIT." (8 parole, che funge da indizio)
            if(decryptedOutput) decryptedOutput.textContent = `DECRYPTED: "${DECRYPTED_TEXT}"`;

            // NUOVO: VITTORIA MISSIONE 3 -> APRE MODALE LEZIONE FASE 3
            setTimeout(() => {
                closeCaesarCipherModal();
                openCaesarLessonModal();
            }, 2000);

        } else {
            if(cipherFeedbackMessage) cipherFeedbackMessage.textContent = ` DECRYPTION FAILED (Key: ${enteredKey}). Try again.`;
            if(cipherFeedbackMessage) cipherFeedbackMessage.classList.add('error-text');
            if(cipherFeedbackMessage) cipherFeedbackMessage.classList.remove('success-text');
            if(decryptedOutput) decryptedOutput.textContent = '';
            if(cipherKeyInput) cipherKeyInput.value = '';
        }
    };


    // Logica Decisione USB (invariata)
    const handleUsbDecision = (isSafeChoice) => {
        closeDecisionModal();

        const stuxnetTitle = stuxnetLessonModal.querySelector('.lesson-title');
        const stuxnetH3 = stuxnetLessonModal.querySelector('.lesson-body h3');
        const stuxnetP1 = stuxnetLessonModal.querySelector('.lesson-body .theory-text:nth-child(2)');
        const stuxnetP2 = stuxnetLessonModal.querySelector('.lesson-body .theory-text.monospace-text:nth-child(3)');
        const stuxnetButton = stuxnetLessonModal.querySelector('.lesson-button');

        if (isSafeChoice) {
             stuxnetTitle.textContent = "RISK AVOIDANCE: BAITING DECLINED";
             stuxnetH3.textContent = "LESSON LEARNED: THE SAFE CHOICE";
             stuxnetP1.innerHTML = "SAFE CHOICE (DECLINE):<br> You correctly avoided the bait trap by adhering to known safety protocols. <br>The real threat here wasn't the driver, but the code hidden inside.";
             stuxnetP2.innerHTML = "While you didn't get immediate access, you protected the integrity of the network. <br>A true Red Team knows that discretion is key.<br> RESULT: VULNERABILITY AVOIDED.";
             stuxnetButton.textContent = "LESSON LEARNED";
             
        } else {
             stuxnetTitle.textContent = " RISK ASSESSMENT: BAITING";
             stuxnetH3.textContent = "LESSON LEARNED: BAITING E STUXNET";
             stuxnetP1.innerHTML = "BAIT (BAITING): <br>Inserting an unknown USB stick is a classic baiting tactic. <br> While it may seem harmless, it's the preferred entry port for attackers.";
             stuxnetP2.innerHTML = "PERSISTENT THREATS:<br> Advanced threats (such as viruses or ransomware) can self-execute by exploiting operating system vulnerabilities to spread automatically.<br> It only takes an instant to infect the entire network, as in the famous case of the Stuxnet malware, which used USB sticks as the initial infection vector in extremely secure environments.";
             stuxnetButton.textContent = "LESSON LEARNED";
        }
        
        openStuxnetLessonModal();
    };

    // Logica post-lezione Credenziali Default (Missione 1 completa -> Missione 2: Patch Management)
    const handleDefaultCredsLesson = () => {
        closeDefaultCredsLessonModal();
        
        // Passa alla MISSIONE 2: Patch Management
        showPatchManagementMissionMessage();
    };
    
    // Logica post-lezione Patch Management (Missione 2 completa -> Fine Fase 2)
    const handlePatchLesson = () => {
        closePatchLessonModal();
        
        // 1. Configura il modale Phase Complete per la Fase 2
        if (completeTitle) completeTitle.textContent = "PHASE 2 COMPLETE";
        if (completeStatus) completeStatus.textContent = "STATUS: READY FOR PHASE 3";
        if (completeBody) {
            completeBody.innerHTML = `
                <h3>OBJECTIVES ACHIEVED:</h3>
                <ul> 
                    <li>Acquisition of NVR IP Address (IoT/NVR Hardening).</li>
                    <li>Successful exploitation of Default Credentials (Insufficient Hardening).</li>
                    <li>Forced System Reboot/Exploit of Unupdated Systems (Patch Management).</li>
                    <li>Temporary NVR Surveillance Deactivation.</li>
                </ul>
                
                <p class="final-message-text">
                    MISSION STATUS:<br> System reboot initiated. NVR feed temporarily disabled. 
                </p>
            `;
        }
        
        // 2. Aggiunge i pulsanti Exit e Phase 3
        if (completeDecisionButtons) {
             completeDecisionButtons.innerHTML = `
                 <button id="exit-to-menu-button-f2" class="decision-button safe">EXIT (Return to Main Menu)</button>
                 <button id="start-phase-3-button" class="decision-button danger">PHASE 3 (Data Exfiltration)</button>
                `;
             // Riassegna i listener ai nuovi pulsanti
             document.getElementById('exit-to-menu-button-f2').addEventListener('click', returnToMenu);
             document.getElementById('start-phase-3-button').addEventListener('click', startGamePhase3);
        }
        
        // 3. Mostra il modale di completamento
        openPhaseCompleteModal();
    };

    // NUOVO: Logica post-lezione Weak Encryption (Fase 3 completa -> Vittoria Finale)
    const handleCaesarLesson = () => {
        closeCaesarLessonModal();
        // Apre il modale di vittoria finale (già configurato)
        openFinalWinModal();
    };
    
    // NUOVO: Logica post-vittoria (Debriefing)
    const handleFinalWin = () => {
        closeFinalWinModal();
        // Apre il modale di Debriefing
        openDebriefingModal();
    };


    const returnToMenu = () => { 
        if(gameScreen1) gameScreen1.classList.add('hidden'); 
        if(gameScreen2) gameScreen2.classList.add('hidden'); 
        if(gameScreen3) gameScreen3.classList.add('hidden'); 
        showTopBar(); 
        showMainMenuContent(); 

        closeAllModals(); 
        
        if (missionMessageBox1) {
            missionMessageBox1.classList.remove('hidden'); 
        }
        if (narratorBox1) {
            narratorBox1.classList.add('hidden'); 
        }
        
        console.log("Tornato al menu principale.");
    };


    // ----------------------------------------------------
    // IV. ASSEGNAZIONE EVENTI
    // ----------------------------------------------------
    
    // Menu e Modali Generali 
    if(menuToggle) menuToggle.addEventListener('click', openSideMenu);
    if(closeSideMenuButton) closeSideMenuButton.addEventListener('click', closeSideMenu);
    if(settingsButtonTop) settingsButtonTop.addEventListener('click', openSettingsModal);
    if(closeSettingsButton) closeSettingsButton.addEventListener('click', closeSettingsModal); 
    
    if (storyButton) storyButton.addEventListener('click', openStoryModal);
    if (closeStoryButton) closeStoryButton.addEventListener('click', closeStoryModal);

    if (phasesButton) phasesButton.addEventListener('click', openPhasesModal);
    if (closePhasesButton) closePhasesButton.addEventListener('click', closePhasesModal);

    // Eventi Glossario (Menu principale e Icone in-game)
    if (glossaryButtonMenu) glossaryButtonMenu.addEventListener('click', openGlossaryModal);
    if (closeGlossaryButton) closeGlossaryButton.addEventListener('click', closeGlossaryModal);
    if (glossaryIcon1) glossaryIcon1.addEventListener('click', openGlossaryModal);
    if (glossaryIcon2Game) glossaryIcon2Game.addEventListener('click', openGlossaryModal);
    if (glossaryIcon3Game) glossaryIcon3Game.addEventListener('click', openGlossaryModal);
    
    // Eventi Game Icons
    if (iconsButtonMenu) iconsButtonMenu.addEventListener('click', openIconsModal);
    if (closeIconsButton) closeIconsButton.addEventListener('click', closeIconsModal);
    
    // Eventi Legend
    if (legendButtonMenu) legendButtonMenu.addEventListener('click', openLegendModal);
    if (closeLegendButton) closeLegendButton.addEventListener('click', closeLegendModal);

    // AGGIUNTA: Listener per i 3 tasti Legend In-game
    if (legendIcon1) legendIcon1.addEventListener('click', openLegendModal);
    if (legendIcon2) legendIcon2.addEventListener('click', openLegendModal);
    if (legendIcon3) legendIcon3.addEventListener('click', openLegendModal);


    if(audioToggleSwitch) {
        audioToggleSwitch.addEventListener('change', (event) => {
            console.log(event.target.checked ? 'Audio Attivato!' : 'Audio Disattivato!');
        });
    }

    // Pulsanti Principali del Menu
    playButton.addEventListener('click', () => {
    startGame();
    // Forza l'avvio se lo switch è acceso
   if (bgMusic && audioToggleSwitch.checked) { 
    bgMusic.play().catch(e => console.error("Errore audio:", e));
}
});

if(continueButton) continueButton.addEventListener('click', () => {
        closeAllModals();
        alert('You clicked "CONTINUE GAME". Loading saved state... (Not implemented yet)');
    });

    
    // Pulsante START/CONTINUE in Game Screen
    if (startGameButton) {
        startGameButton.addEventListener('click', hideMessageBox);
    }
    if (startPhase2MsgButton) { 
        startPhase2MsgButton.addEventListener('click', hideMessageBox); 
    }


    // Icone Exit/Glossary
    if(exitButton) { exitButton.addEventListener('click', returnToMenu); }
    if(exitButton2) { exitButton2.addEventListener('click', returnToMenu); }
    if(exitButton3) { exitButton3.addEventListener('click', returnToMenu); } 
    
    // Logica Password Marco (Fase 1)
    if (confirmPasswordButton) { confirmPasswordButton.addEventListener('click', validatePassword); }
    if (passwordInput) {
        passwordInput.addEventListener('keydown', (event) => {
            if (event.key === 'Enter') {
                event.preventDefault(); 
                validatePassword();
            }
        });
    }
    if (closeTerminalButton) { closeTerminalButton.addEventListener('click', closePasswordModal); }

    // Logica IP NVR (Fase 2, Missione 1 - Step 1)
    if (closeItMonitorButton) { closeItMonitorButton.addEventListener('click', closeItMonitorModal); }
    if (confirmIpButton) { confirmIpButton.addEventListener('click', validateIp); }
    if (ipInput) {
        ipInput.addEventListener('keydown', (event) => {
            if (event.key === 'Enter') {
                event.preventDefault(); 
                validateIp();
            }
        });
    }
    
    // Logica Login NVR (Fase 2, Missione 1 - Step 2)
    if (closeNvrLoginButton) { closeNvrLoginButton.addEventListener('click', closeNvrLoginModal); }
    if (confirmNvrLoginButton) { confirmNvrLoginButton.addEventListener('click', validateNvrLogin); }
    if (nvrPasswordInput) {
        nvrPasswordInput.addEventListener('keydown', (event) => {
            if (event.key === 'Enter') {
                event.preventDefault(); 
                validateNvrLogin();
            }
        });
    }
    
    // Logica post-lezione Credenziali Default (Missione 1 -> Missione 2)
    if (defaultCredsLearnedButton) {
        defaultCredsLearnedButton.addEventListener('click', handleDefaultCredsLesson);
    }
    
    // Logica Post-Lezione Patch Management (Fine Missione 2)
    if (patchLearnedButton) { patchLearnedButton.addEventListener('click', handlePatchLesson); }

    // Logica Caesar Cipher (Fase 3)
    if (ceoMonitorHotspot) { ceoMonitorHotspot.addEventListener('click', openCaesarCipherModal); }
    if (closeCeoMonitorButton) { closeCeoMonitorButton.addEventListener('click', closeCaesarCipherModal); }
    if (confirmCipherKeyButton) { confirmCipherKeyButton.addEventListener('click', handleCaesarCipher); }
    if (cipherKeyInput) {
        cipherKeyInput.addEventListener('keydown', (event) => {
            if (event.key === 'Enter') {
                event.preventDefault(); 
                handleCaesarCipher();
            }
        });
    }
    
    // NUOVO: Logica post-lezione Caesar (Fase 3 -> Vittoria Finale)
    if (caesarLearnedButton) { caesarLearnedButton.addEventListener('click', handleCaesarLesson); }
    
    // Logica VITTORIA FINALE -> Debriefing
    if (finalExitMenuButton) { finalExitMenuButton.addEventListener('click', handleFinalWin); }
    
    // Logica Debriefing -> Menu Principale
    if (closeDebriefingButton) { closeDebriefingButton.addEventListener('click', returnToMenu); }


    // Logica Lezione Password Spraying
    if (lessonLearnedButton) {
        lessonLearnedButton.addEventListener('click', () => {
            closeLessonModal();
            showMissionMessage2(); 
        });
    }

    // Logica Decisione USB
    if (choiceInsertUsb) { choiceInsertUsb.addEventListener('click', () => handleUsbDecision(false)); }
    if (choiceDeclineUsb) { choiceDeclineUsb.addEventListener('click', () => handleUsbDecision(true)); }
    
    // Logica Lezione Finale Fase 1
    // Logica Lezione Finale Fase 1
if (stuxnetLearnedButton) {
    stuxnetLearnedButton.addEventListener('click', () => { // CORREZIONE: stuxnetLearnedButton
        closeStuxnetLessonModal();
        // Logica per la chiusura Fase 1
        if (completeTitle) completeTitle.textContent = "PHASE 1 COMPLETE";
        if (completeStatus) completeStatus.textContent = "STATUS: READY FOR PHASE 2";
        if (completeBody) {
            completeBody.innerHTML = `
                <h3>OBJECTIVES ACHIEVED:</h3>
                <ul> 
                    <li>Physical Access Established.</li>
                    <li>Initial Network Credentials Acquired (Weak Password Exploited).</li>
                    <li>Baiting Protocol Vulnerability Documented.</li>
                </ul>
                <p class="final-message-text">
                    MISSION STATUS:<br> Access to the OmniCorp main network is secured. <br>
                    Select an option to proceed:
                </p>
            `;
        }
        if (completeDecisionButtons) {
            completeDecisionButtons.innerHTML = `
                <button id="exit-to-menu-button" class="decision-button safe">EXIT (Return to Main Menu)</button>
                <button id="start-phase-2-button" class="decision-button danger">PHASE 2 (Network Exploitation)</button>
            `;
            document.getElementById('exit-to-menu-button').addEventListener('click', () => { closePhaseCompleteModal(); returnToMenu(); });
            document.getElementById('start-phase-2-button').addEventListener('click', startGamePhase2);
        }
        
        openPhaseCompleteModal(); 
    });
}
    
    // Logica Chiusura Modal Fase Completata (Generica)
    if (exitToMenuButton) {
        exitToMenuButton.addEventListener('click', () => {
            closePhaseCompleteModal();
            returnToMenu(); 
        });
    }
});

// Gestione apertura Menu Laterale dalle missioni
document.querySelectorAll('.mission-menu-trigger').forEach(btn => {
    btn.addEventListener('click', () => {
        closeAllModals(); // Chiude eventuali puzzle o messaggi aperti
        if(sideMenu) sideMenu.classList.add('visible'); // Apre il Side Menu
    });
});

document.querySelectorAll('.volume-trigger-icon').forEach(btn => {
    btn.addEventListener('click', () => {
        if (bgMusic.paused) {
            bgMusic.play();
            audioToggleSwitch.checked = true; // Usa il nome corretto
        } else {
            bgMusic.pause();
            audioToggleSwitch.checked = false; // Usa il nome corretto
        }
    });
});
