export type EmailLog = {
  date: Date;
  id: number | null;
  recipient: string;
  speakerName: string;
  status: string;
  subject: string;
  title: string;
};
