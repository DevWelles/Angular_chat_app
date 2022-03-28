export interface Member { //trenutačni member tj. ja
  clientData:{avatar:string, username:string},
  id:string;
}

export interface NewMessage {
  member: {clientData:{avatar:string, username:string},
           id:string};
  text: any;
  timestamp: any;
  id_message: any;
}

