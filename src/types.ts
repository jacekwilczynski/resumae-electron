export interface ResumeData {
  name: string;
  contactInfo: string[];
  sections: Section[];
}

export interface Section {
  id: string;
  title: string;
  text: string;
}
