import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ClockComponent } from './clock/clock.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WeatherComponent } from './weather/weather.component';
import { CountdownTimerComponent } from './countdown-timer/countdown-timer.component';

import { SocketIoConfig, SocketIoModule } from 'ngx-socket-io';
import { FormsModule } from '@angular/forms';
import { CommandItemComponent } from './command-item/command-item.component';
import { TirageItemComponent } from './tirage-item/tirage-item.component';
import { ControleItemComponent } from './controle-item/controle-item.component';
import { EmballageItemComponent } from './emballage-item/emballage-item.component';
import { BestOfTirageItemComponent } from './best-of-tirage-item/best-of-tirage-item.component';
import { WorstOfTirageItemComponent } from './worst-of-tirage-item/worst-of-tirage-item.component';
import { WebsocketService } from './services/soket/websocket.service';
import { FlipComponenetComponent } from './flip-componenet/flip-componenet.component';
import { InventaireItemComponent } from './inventaire-item/inventaire-item.component';
import { VoiceControlComponent } from './voice-control/voice-control.component';
import { ZoomedTirageComponent } from './zoomed-tirage/zoomed-tirage.component';
import { NotTiragedComponent } from './not-tiraged/not-tiraged.component';
import { BarChartHorizontalComponent } from './bar-chart-horizontal/bar-chart-horizontal.component';
import { DoughnutChartComponent } from './doughnut-chart/doughnut-chart.component';
import { SleepingModeComponent } from './sleeping-mode/sleeping-mode.component';
import { FlipedCardsService } from './services/fliped cards/fliped-cards.service';
import { VoiceCommandService } from './services/voiceCommand/voice-command.service';
import { MergeArraysService } from './services/mergeArrays/merge-arrays.service';
import { BestAndWorstService } from './services/bestAndWorst/best-and-worst.service';
import { FlowChartComponent } from './flow-chart/flow-chart.component';
import { SerieChartComponent } from './serie-chart/serie-chart.component';
// const config: SocketIoConfig = {url: 'http://10.0.0.65:3110', options: {}};
@NgModule({
  declarations: [
    AppComponent,
    ClockComponent,
    WeatherComponent,
    CountdownTimerComponent,
    CommandItemComponent,
    TirageItemComponent,
    ControleItemComponent,
    EmballageItemComponent,
    BestOfTirageItemComponent,
    WorstOfTirageItemComponent,
    FlipComponenetComponent,
    InventaireItemComponent,
    VoiceControlComponent,
    ZoomedTirageComponent,
    NotTiragedComponent,
    BarChartHorizontalComponent,
    DoughnutChartComponent,
    SleepingModeComponent,
    FlowChartComponent,
    SerieChartComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    // SocketIoModule.forRoot(config),
    FormsModule,

  ],
  providers: [WebsocketService,FlipedCardsService,VoiceCommandService,MergeArraysService,BestAndWorstService], 
  bootstrap: [AppComponent]
})
export class AppModule { }
