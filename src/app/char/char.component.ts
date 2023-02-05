import { Component } from '@angular/core';

@Component({
  selector: 'app-char',
  templateUrl: './char.component.html',
  styleUrls: ['./char.component.scss']
})
export class CharComponent {
lista =[
  {titulo:"Michael Scott",contenido:"Portrayed by Steve Carell. Michael serves as the regional manager of the Scranton, Pennsylvania branch of paper company, Dunder Mifflin Inc.",url:"https://upload.wikimedia.org/wikipedia/en/d/dc/MichaelScott.png"},
  {titulo:"Dwight Schrute",contenido:"Portrayed by Rainn Wilson. Dwight's character was a salesman and the assistant to the regional manager,known for his lack of social skills and common sense, but he is also known for his love of martial arts and the justice system.",url:"https://upload.wikimedia.org/wikipedia/en/c/cd/Dwight_Schrute.jpg"},
  {titulo:"Jim Halpert",contenido:"Portrayed by John Krasinski. He is introduced as a sales representative. His character serves as the intelligent, mild-mannered straight man role to Michael, although he is also notable for his rivalrous pranks on fellow salesman Dwight Schrute and his romantic interest in receptionist Pam Beesly",url:"https://upload.wikimedia.org/wikipedia/en/7/7e/Jim-halpert.jpg"},
  {titulo:"Pam Beesly",contenido:"Played by Jenna Fischer.Pam begins the series as the receptionist.She is artistically inclined throughout the series and attends art school. Pam shares a friendship and then a romance with Jim Halpert.",url:"https://upload.wikimedia.org/wikipedia/en/thumb/6/67/Pam_Beesley.jpg/220px-Pam_Beesley.jpg"},
  {titulo:"Ryan Howard",contenido:"He is portrayed by B. J. Novak, one of the show's writers, directors, and the executive producer",url:"https://upload.wikimedia.org/wikipedia/en/9/91/Ryan_Howard_%28The_Office%29.jpg"},
  {titulo:"Andy Bernard",contenido:"Portrayed by Ed Helms. He is introduced in Season 3 of the show as the Regional Director in Charge of Sales at the Stamford branch of paper distribution company, Dunder Mifflin when Jim Halpert transfers there from the Scranton branch in which the show is taking place.",url:"https://upload.wikimedia.org/wikipedia/en/8/84/Andy_Bernard_photoshot.jpg"},
  {titulo:"Angela Martin",contenido:"Portrayed by actress Angela Kinsey. She is introduced as the senior accountant, head of the Party Planning Committee, and safety officer at the Scranton branch of Dunder Mifflin. Her character serves as the stuck-up and more professional face of the branch. She begins a relationship with co-worker Dwight Schrute.",url:"https://upload.wikimedia.org/wikipedia/en/0/0b/Angela_Martin.jpg"},
  {titulo:"Kevin Malone",contenido:"He is portrayed by Brian Baumgartner. Kevin is one of the more prominent supporting characters throughout the first season. In the episode Basketball, while making a basketball team for a game against the warehouse employees, Michael ignores Kevin's plea to join the team. It is later revealed that Kevin is an excellent basketball player.",url:"https://upload.wikimedia.org/wikipedia/en/6/60/Office-1200-baumgartner1.jpg"},
  {titulo:"Kelly Kapoor",contenido:"Portrayed by Mindy Kaling. She is the customer service representative at the Scranton branch of Dunder Mifflin from seasons 1 to 8. Following Kaling's departure from the show, Kelly leaves the Scranton branch at the beginning of the ninth season to get married and move to Ohio.",url:"https://upload.wikimedia.org/wikipedia/en/6/69/Kelly_Kapoor.jpg"}]
}
