import WebSocket from "ws";

import type {
  PriceTick
} from "../types.js";


export class MarketWebSocket {

  private socket?: WebSocket;


  constructor(
    private readonly url: string
  ) {}


  connect(): void {

    this.socket =
      new WebSocket(
        this.url
      );


    this.socket.on(
      "open",
      () => {
        console.log(
          "Market websocket connected"
        );
      }
    );


    this.socket.on(
      "message",
      (data) => {

        const message =
          JSON.parse(
            data.toString()
          ) as PriceTick;


        this.onTick(
          message
        );
      }
    );


    this.socket.on(
      "close",
      () => {
        console.log(
          "Market websocket disconnected"
        );
      }
    );
  }


  disconnect(): void {

    this.socket?.close();

  }


  protected onTick(
    tick: PriceTick
  ): void {

    console.log(
      tick
    );

  }
}
