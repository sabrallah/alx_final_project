import { Component, OnInit, ViewChild } from '@angular/core';
import { WebsocketService } from './services/soket/websocket.service';
import { trigger, transition, style, animate, state } from '@angular/animations';
import { FlipedCardsService } from './services/fliped cards/fliped-cards.service';
import { VoiceCommandService } from './services/voiceCommand/voice-command.service';
import { MergeArraysService } from './services/mergeArrays/merge-arrays.service';
import { BestAndWorstService } from './services/bestAndWorst/best-and-worst.service';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    animations: [
        trigger('flipAnimation', [
            state('front', style({ transform: 'rotateY(0deg)' })),
            state('back', style({ transform: 'rotateY(180deg)' })),
            transition('front <=> back', animate('0.5s ease')),
        ]),
    ],
})
export class AppComponent implements OnInit {
    //services data  
    voice_command: any;
    mergedCommand: any;
    // data from service
    visibleCards1: any[] = []
    visibleCardsZ: any[] = []
    visibleCardsNOT: any[] = []
    best3T: any;
    worst3T: any;
    // component data
    countingNT: any = [];
    countingNC: any = [];
    invontaire: any[] = [];
    // Soket handling
    message        !: string;
    receivedMessage!: string;
    receivedData: any;
    messagesArray: { id: number, message: string, username: string }[] = [];
    
    cards2: any[] = [];
    lastTest:any = {
        tirStats: [
            {
                id: 0,
                QTE: 0,
                LIGNE: 0,
                EVT_TIREUR: '000'
            },
            {
                id: 1,
                QTE: 11,
                LIGNE: 111,
                EVT_TIREUR: '111'
            },
            {
                id: 2,
                QTE: 22,
                LIGNE: 222,
                EVT_TIREUR: '222'
            },
            {
                id: 3,
                QTE: 33,
                LIGNE: 333,
                EVT_TIREUR: '333'
            },
            {
                id: 4,
                QTE: 44,
                LIGNE: 444,
                EVT_TIREUR: '444'
            },
            {
                id: 5,
                QTE: 55,
                LIGNE: 555,
                EVT_TIREUR: '555'
            },
            {
                id: 7,
                QTE: 77,
                LIGNE: 777,
                EVT_TIREUR: '777'
            },
            {
                id: 8,
                QTE: 88,
                LIGNE: 888,
                EVT_TIREUR: '888'
            },
            {
                id: 9,
                QTE: 99,
                LIGNE: 999,
                EVT_TIREUR: '999'
            },
            {
                id: 10,
                QTE: 10,
                LIGNE: 100,
                EVT_TIREUR: '100'
            },

        ],
        crlStats: [

            {

                QTE: 86,
                LIGNE: 8767,
                EVT_CTRL: '098'
            },
            {
                QTE: 8776,
                LIGNE: 7,
                EVT_CTRL: '0978'
            },
            {
                QTE: 8786,
                LIGNE: 787,
                EVT_CTRL: '0U98'
            },
            {
                QTE: 876,
                LIGNE: 7,
                EVT_CTRL: '098'
            },
            {
                QTE: 876,
                LIGNE: 7,
                EVT_CTRL: '0978'
            },


        ],
        invStats: [
            {
                INV: null,
                code: 96
            },
            {
                INV: 'na',
                code: 54
            },
            {
                INV: 'jj',
                code: 1
            }
        ],
        waitingCmd: [
            {
                "EVT_NEWBL": "260354/23   ",
                "EVT_COCLI": "1128",
                "RAISOCI": "AL HAMAMA-TETOUAN                  ",
                "EVT_HRFIN": "0914",
                "EVT_SECT": "01009",
                "EVT_TCTRL": null,
                "EVT_HRTIR": null,
                "EVT_TIREUR": "057",
                "EVT_CTRL": "057"
            },
            {
                "EVT_NEWBL": "260875/23   ",
                "EVT_COCLI": "2105",
                "RAISOCI": "DIZA                               ",
                "EVT_HRFIN": "1554",
                "EVT_SECT": "02001",
                "EVT_TCTRL": null,
                "EVT_HRTIR": "1557",
                "EVT_TIREUR": "021",
                "EVT_CTRL": "   "
            },
            {
                "EVT_NEWBL": "260876/23   ",
                "EVT_COCLI": "1321",
                "RAISOCI": "S. A. EL FAKHAR-TETOUAN            ",
                "EVT_HRFIN": "1556",
                "EVT_SECT": "01003",
                "EVT_TCTRL": null,
                "EVT_HRTIR": "1559",
                "EVT_TIREUR": "021",
                "EVT_CTRL": "   "
            },
            {
                "EVT_NEWBL": "260354/23   ",
                "EVT_COCLI": "1128",
                "RAISOCI": "Chbar  ",
                "EVT_HRFIN": "0914",
                "EVT_SECT": "01045",
                "EVT_TCTRL": null,
                "EVT_HRTIR": null,
                "EVT_TIREUR": "057",
                "EVT_CTRL": "057"
            },
            {
                "EVT_NEWBL": "260875/23   ",
                "EVT_COCLI": "2105",
                "RAISOCI": "Coulena                              ",
                "EVT_HRFIN": "1554",
                "EVT_SECT": "02034",
                "EVT_TCTRL": null,
                "EVT_HRTIR": "1557",
                "EVT_TIREUR": "021",
                "EVT_CTRL": "   "
            },
            {
                "EVT_NEWBL": "260876/23   ",
                "EVT_COCLI": "1321",
                "RAISOCI": "Tanger center           ",
                "EVT_HRFIN": "1556",
                "EVT_SECT": "0112",
                "EVT_TCTRL": null,
                "EVT_HRTIR": "1559",
                "EVT_TIREUR": "021",
                "EVT_CTRL": "   "
            },
            {
                "EVT_NEWBL": "260354/23   ",
                "EVT_COCLI": "1128",
                "RAISOCI": "Araich                 ",
                "EVT_HRFIN": "0914",
                "EVT_SECT": "01043",
                "EVT_TCTRL": null,
                "EVT_HRTIR": null,
                "EVT_TIREUR": "057",
                "EVT_CTRL": "057"
            },
            {
                "EVT_NEWBL": "260875/23   ",
                "EVT_COCLI": "2105",
                "RAISOCI": "Jaber ib hayan                               ",
                "EVT_HRFIN": "1554",
                "EVT_SECT": "02031",
                "EVT_TCTRL": null,
                "EVT_HRTIR": "1557",
                "EVT_TIREUR": "021",
                "EVT_CTRL": "   "
            },
            {
                "EVT_NEWBL": "260876/23   ",
                "EVT_COCLI": "1321",
                "RAISOCI": "Romana             ",
                "EVT_HRFIN": "1556",
                "EVT_SECT": "1303",
                "EVT_TCTRL": null,
                "EVT_HRTIR": "1559",
                "EVT_TIREUR": "021",
                "EVT_CTRL": "   "
            },
            {
                "EVT_NEWBL": "260354/23   ",
                "EVT_COCLI": "1128",
                "RAISOCI": "Tabloula                ",
                "EVT_HRFIN": "0914",
                "EVT_SECT": "01309",
                "EVT_TCTRL": null,
                "EVT_HRTIR": null,
                "EVT_TIREUR": "057",
                "EVT_CTRL": "057"
            },
            {
                "EVT_NEWBL": "260875/23   ",
                "EVT_COCLI": "2105",
                "RAISOCI": "DIZA                               ",
                "EVT_HRFIN": "1554",
                "EVT_SECT": "0432",
                "EVT_TCTRL": null,
                "EVT_HRTIR": "1557",
                "EVT_TIREUR": "021",
                "EVT_CTRL": "   "
            },
            {
                "EVT_NEWBL": "260876/23   ",
                "EVT_COCLI": "1321",
                "RAISOCI": "Houcima            ",
                "EVT_HRFIN": "1556",
                "EVT_SECT": "03092",
                "EVT_TCTRL": null,
                "EVT_HRTIR": "1559",
                "EVT_TIREUR": "021",
                "EVT_CTRL": "   "
            },
            {
                "EVT_NEWBL": "260354/23   ",
                "EVT_COCLI": "1128",
                "RAISOCI": "Tabloula                ",
                "EVT_HRFIN": "0914",
                "EVT_SECT": "01309",
                "EVT_TCTRL": null,
                "EVT_HRTIR": null,
                "EVT_TIREUR": "057",
                "EVT_CTRL": "057"
            },
            {
                "EVT_NEWBL": "260875/23   ",
                "EVT_COCLI": "2105",
                "RAISOCI": "DIZA                               ",
                "EVT_HRFIN": "1554",
                "EVT_SECT": "0432",
                "EVT_TCTRL": null,
                "EVT_HRTIR": "1557",
                "EVT_TIREUR": "021",
                "EVT_CTRL": "   "
            },
            {
                "EVT_NEWBL": "260876/23   ",
                "EVT_COCLI": "1321",
                "RAISOCI": "Houcima            ",
                "EVT_HRFIN": "1556",
                "EVT_SECT": "03092",
                "EVT_TCTRL": null,
                "EVT_HRTIR": "1559",
                "EVT_TIREUR": "021",
                "EVT_CTRL": "   "
            }
        ],
        secteurs: [
            {
                "id": 1,
                "code": "00000",
                "name": "A affecter                         ",
                "maxTime": 60,
                "nextDepart": "3:36:00",
                "createdAt": "2023-09-16T21:15:31.576Z"
            },
            {
                "id": 2,
                "code": "01002",
                "name": "CENTRE VILLE                       ",
                "maxTime": 60,
                "nextDepart": "20:50:00",
                "createdAt": "2023-09-16T21:15:31.606Z"
            },
            {
                "id": 3,
                "code": "01003",
                "name": "COELMA                             ",
                "maxTime": 60,
                "nextDepart": "23:59:00",
                "createdAt": "2023-09-16T21:15:31.636Z"
            },
            {
                "id": 4,
                "code": "01004",
                "name": "AVENUE DES F.A.R                   ",
                "maxTime": 60,
                "nextDepart": null,
                "createdAt": "2023-09-16T21:15:31.670Z"
            },
            {
                "id": 5,
                "code": "02001",
                "name": "MARTIL D                           ",
                "maxTime": 60,
                "nextDepart": "14:40:00",
                "createdAt": "2023-09-16T21:15:31.710Z"
            },
            {
                "id": 6,
                "code": "01001",
                "name": "ROMANA                             ",
                "maxTime": 60,
                "nextDepart": null,
                "createdAt": "2023-09-16T21:15:31.740Z"
            },
            {
                "id": 7,
                "code": "02002",
                "name": "M'DIQ                              ",
                "maxTime": 60,
                "nextDepart": null,
                "createdAt": "2023-09-16T21:15:31.760Z"
            },
            {
                "id": 8,
                "code": "02003",
                "name": "FNIDEQ                             ",
                "maxTime": 60,
                "nextDepart": null,
                "createdAt": "2023-09-16T21:15:31.800Z"
            },
            {
                "id": 9,
                "code": "03001",
                "name": "CHARF                              ",
                "maxTime": 60,
                "nextDepart": null,
                "createdAt": "2023-09-16T21:15:31.830Z"
            },
            {
                "id": 10,
                "code": "03002",
                "name": "CENTRE                             ",
                "maxTime": 60,
                "nextDepart": null,
                "createdAt": "2023-09-16T21:15:31.853Z"
            },
            {
                "id": 11,
                "code": "03003",
                "name": "ROUTE DE RABAT                     ",
                "maxTime": 60,
                "nextDepart": null,
                "createdAt": "2023-09-16T21:15:31.873Z"
            },
            {
                "id": 12,
                "code": "03004",
                "name": "BENI MAKADA                        ",
                "maxTime": 60,
                "nextDepart": null,
                "createdAt": "2023-09-16T21:15:31.903Z"
            },
            {
                "id": 13,
                "code": "88888",
                "name": "SECTEUR CHALAND                    ",
                "maxTime": 60,
                "nextDepart": null,
                "createdAt": "2023-09-16T21:15:31.930Z"
            },
            {
                "id": 14,
                "code": "04002",
                "name": "BAB TAZA                           ",
                "maxTime": 60,
                "nextDepart": null,
                "createdAt": "2023-09-16T21:15:31.960Z"
            },
            {
                "id": 15,
                "code": "04003",
                "name": "OUAZZANE                           ",
                "maxTime": 60,
                "nextDepart": null,
                "createdAt": "2023-09-16T21:15:31.980Z"
            },
            {
                "id": 16,
                "code": "05001",
                "name": "KSAR KBIR                          ",
                "maxTime": 60,
                "nextDepart": null,
                "createdAt": "2023-09-16T21:15:32.026Z"
            },
            {
                "id": 17,
                "code": "05002",
                "name": "LARACHE                            ",
                "maxTime": 60,
                "nextDepart": null,
                "createdAt": "2023-09-16T21:15:32.056Z"
            },
            {
                "id": 18,
                "code": "06001",
                "name": "DIVERS                             ",
                "maxTime": 60,
                "nextDepart": null,
                "createdAt": "2023-09-16T21:15:32.086Z"
            },
            {
                "id": 19,
                "code": "04001",
                "name": "CHAOUEN                            ",
                "maxTime": 60,
                "nextDepart": null,
                "createdAt": "2023-09-16T21:15:32.116Z"
            },
            {
                "id": 20,
                "code": "01005",
                "name": "SANIAT RMAL                        ",
                "maxTime": 60,
                "nextDepart": null,
                "createdAt": "2023-09-16T21:15:32.140Z"
            },
            {
                "id": 21,
                "code": "06002",
                "name": "AL GHARB                           ",
                "maxTime": 60,
                "nextDepart": null,
                "createdAt": "2023-09-16T21:15:32.163Z"
            },
            {
                "id": 22,
                "code": "07001",
                "name": "MEKNES                             ",
                "maxTime": 60,
                "nextDepart": null,
                "createdAt": "2023-09-16T21:15:32.186Z"
            },
            {
                "id": 23,
                "code": "99099",
                "name": "INTERNE                            ",
                "maxTime": 60,
                "nextDepart": null,
                "createdAt": "2023-09-16T21:15:32.210Z"
            },
            {
                "id": 24,
                "code": "06003",
                "name": "KENITRA                            ",
                "maxTime": 60,
                "nextDepart": null,
                "createdAt": "2023-09-16T21:15:32.230Z"
            },
            {
                "id": 25,
                "code": "01006",
                "name": "JAMAA AFAILAL                      ",
                "maxTime": 60,
                "nextDepart": null,
                "createdAt": "2023-09-16T21:15:32.250Z"
            },
            {
                "id": 26,
                "code": "01007",
                "name": "DOMICILE                           ",
                "maxTime": 60,
                "nextDepart": null,
                "createdAt": "2023-09-16T21:15:32.273Z"
            },
            {
                "id": 27,
                "code": "07002",
                "name": "FES                                ",
                "maxTime": 60,
                "nextDepart": null,
                "createdAt": "2023-09-16T21:15:32.293Z"
            },
            {
                "id": 28,
                "code": "07003",
                "name": "HOCEIMA- NADOR                     ",
                "maxTime": 60,
                "nextDepart": null,
                "createdAt": "2023-09-16T21:15:32.313Z"
            },
            {
                "id": 29,
                "code": "05003",
                "name": "DIVERS                             ",
                "maxTime": 60,
                "nextDepart": null,
                "createdAt": "2023-09-16T21:15:32.330Z"
            },
            {
                "id": 30,
                "code": "10015",
                "name": "SUD                                ",
                "maxTime": 60,
                "nextDepart": null,
                "createdAt": "2023-09-16T21:15:32.350Z"
            },
            {
                "id": 31,
                "code": "10013",
                "name": "NORD                               ",
                "maxTime": 60,
                "nextDepart": null,
                "createdAt": "2023-09-16T21:15:32.373Z"
            },
            {
                "id": 32,
                "code": "01009",
                "name": "EL HAMAMA                          ",
                "maxTime": 60,
                "nextDepart": '5:30:00',
                "createdAt": "2023-09-16T3:15:32.390Z"
            },
            {
                "id": 33,
                "code": "02011",
                "name": "MARTIL G                           ",
                "maxTime": 60,
                "nextDepart": null,
                "createdAt": "2023-09-16T21:15:32.410Z"
            }
        ]
    }

    constructor(
        // private websocketService: WebsocketService
        public flipedCards: FlipedCardsService, 
        private voiceCommand: VoiceCommandService,
         private merge_arrays: MergeArraysService,
          private bestAndWorst: BestAndWorstService) {
     }
tirage:any=[];
    ngOnInit() {
        this.voice_command = this.voiceCommand
        this.voiceCommand.setupVoiceRecognition();
        this.mergedCommand = this.merge_arrays
        this.merge_arrays.mergeArrays(this.lastTest);
        this.merge_arrays.sortByClosestTime(this.merge_arrays.command)
        // this.websocketService.onMessage().subscribe((message: any) => {
        //     this.receivedMessage = message;
        // });
        this.receivedData = this.lastTest
        // score handler
        this.bestAndWorst.getBestAndWorst(this.lastTest)
        this.best3T = this.bestAndWorst.best3T
        this.worst3T = this.bestAndWorst.worst3T.reverse()
        this.flipedCards.showNextSetOfCards(this.lastTest.tirStats, this.lastTest.crlStats, this.cards2, this.lastTest.tirStats, this.lastTest.waitingCmd);
        this.visibleCards1 = this.flipedCards.visibleCards1
        this.visibleCardsZ = this.flipedCards.visibleCardsZ
        this.visibleCardsNOT = this.flipedCards.visibleCardsNOT
        this.invontaire = this.lastTest.invStats
        this.updateTirage();
        this.simulateMessages();
    }

    pushHndle() {
        this.bestAndWorst.getBestAndWorst(this.lastTest)
        
    }
    updateTirage(){
        let a = Math.floor(Math.random()*10)
       setTimeout(() => {
        if(a%2==0){
            if(a<7){
                this.lastTest.waitingCmd.push(    {
                    "EVT_NEWBL": "260875/23   ",
                    "EVT_COCLI": "2105",
                    "RAISOCI": "DIZA                               ",
                    "EVT_HRFIN": "1554",
                    "EVT_SECT": "02001",
                    "EVT_TCTRL": null,
                    "EVT_HRTIR": "1557",
                    "EVT_TIREUR": "021",
                    "EVT_CTRL": "   "
                })
            }else{
                this.lastTest.waitingCmd.pop(    {
                    "EVT_NEWBL": "260875/23   ",
                    "EVT_COCLI": "2105",
                    "RAISOCI": "DIZA                               ",
                    "EVT_HRFIN": "1554",
                    "EVT_SECT": "02001",
                    "EVT_TCTRL": null,
                    "EVT_HRTIR": "1557",
                    "EVT_TIREUR": "021",
                    "EVT_CTRL": "   "
                })
            }
        }else{
            if(a>7){
                this.lastTest.waitingCmd.push(    {
                    "EVT_NEWBL": "260875/23   ",
                    "EVT_COCLI": "2105",
                    "RAISOCI": "DIZA                               ",
                    "EVT_HRFIN": "1554",
                    "EVT_SECT": "02001",
                    "EVT_TCTRL": "015",
                    "EVT_HRTIR": "1557",
                    "EVT_TIREUR": null,
                    "EVT_CTRL": "   "
                })
            }else{
                this.lastTest.waitingCmd.pop(    {
                    "EVT_NEWBL": "260875/23   ",
                    "EVT_COCLI": "2105",
                    "RAISOCI": "DIZA                               ",
                    "EVT_HRFIN": "1554",
                    "EVT_SECT": "02001",
                    "EVT_TCTRL": "015",
                    "EVT_HRTIR": "1557",
                    "EVT_TIREUR": null,
                    "EVT_CTRL": "   "
                })
            }
        }  
        this.updateTirage()
       }, 5000);
       this.countingNC = [this.lastTest.waitingCmd.filter((item: any) => item.EVT_TCTRL === null).length]
       this.countingNT = [this.lastTest.waitingCmd.filter((item: any) => item.EVT_TIREUR === null).length]

}

generateRandomMessage(): { id: number, message: string, username: string } {
    const usernames = ["Learbi Lamba", "Jilali El khatar", "Salwa El Kahba", "Ahmed Tsemsima", "Youssef Subralla", "Youssra El Khasra", "Majda El Wajda"];
    const messages = [
      "What's your opinion on tirage?",
      "How do you feel about controle?",
      "Have you tried commande?",
      "Let's discuss tirage, controle, and commande.",
      "Tirage, controle, and commande are important topics.",
      "Do you have any experience with tirage, controle, or commande?",
      "Let's explore the concept of tirage, controle, and commande together.",
      "I'm interested in learning more about tirage, controle, and commande."
    ];

    const randomUsername = usernames[Math.floor(Math.random() * usernames.length)];
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];

    return { id: Date.now(), message: randomMessage, username: randomUsername };
  }

  simulateMessages(): void {
    const intervalId = setInterval(() => {
      const randomMessage = this.generateRandomMessage();
      this.messagesArray.push(randomMessage);
    }, 5000);

    // Stop generating messages after 1 minute (for demonstration purposes)
    setTimeout(() => {
      clearInterval(intervalId);
      console.log("Messages generation stopped."); // Log message to console (optional)
    }, 60000); // Stop after 1 minute
  }
}