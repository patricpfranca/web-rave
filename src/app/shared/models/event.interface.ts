export interface Event {
  title: string;
  dateStart: any;
  dateEnd: any;
  description: string;
  organizer: {
    name: string;
    email: string;
    social: {
      facebook: string;
      instagram: string;
    }
  };
}
