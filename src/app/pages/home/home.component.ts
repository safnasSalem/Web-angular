import { Component, OnInit, OnDestroy } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('cardAnimation', [
      state('visible', style({
        opacity: 1,
        transform: 'translateX(0)'
      })),
      state('hidden', style({
        opacity: 0,
        transform: 'translateX(-100%)'
      })),
      transition('visible => hidden', animate('300ms ease-out')),
      transition('hidden => visible', animate('300ms ease-in'))
    ]),
    trigger('moveText', [
      transition('* <=> *', [
        style({ transform: 'translateY(0)' }),
        animate('3s ease-in-out', style({ transform: 'translateY(20px)' })),
      ]),
    ]),
  ]
  
})
export class HomeComponent implements OnInit, OnDestroy {
  ontouchstart: number | null = null; 

  slides = [
    { image: '../../../assets/packmanpackaging.jpg', text: 'Industrial Packing' },
    { image: '../../../assets/agricultural-packing.png', text: 'Agricultural Packaging' },  
    { image: '../../../assets/Custom.jpg', text: 'Customized bags, cups and boxes' },
    { image: '../../../assets/Packagingautomation.jpg', text: 'Machinery Packaging' },
    { image: '../../../assets/Ancillary Products.png', text: 'Ancillary Packaging' },
    { image: '../../../assets/pharmacy.png', text: 'Pharmaceutical Packaging' }
  ];
  
  currentIndex = 0;
  interval: any;

  constructor(private router: Router) {}

  ngOnInit() {
    // Start the automatic sliding when the component initializes
    this.startSliding();
  }
  scrollTo() {
    // Scroll to the top of the page
    window.scrollTo(0, 0);
  }

  startSliding() {
    this.interval = setInterval(() => {
      this.nextSlide();
    }, 2000); // Adjust the interval (in milliseconds) for automatic sliding
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
  }

  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
  }

  ngOnDestroy() {
    // Clear the interval when the component is destroyed
    clearInterval(this.interval);
  }

  // Place the sliding functions here
}

// Automatic sliding
let currentIndex: number = 0;
const slides: NodeListOf<Element> = document.querySelectorAll('.slider-main .item');

function showSlide(index: number) {
    slides.forEach((slide: Element, i: number) => {
        if (i === index) {
            (slide as HTMLElement).style.display = 'block';
        } else {
            (slide as HTMLElement).style.display = 'none';
        }
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
}

// Start automatic sliding
let intervalId: any;

function startSliding() {
    intervalId = setInterval(nextSlide, 3000); // Change slide every 5 seconds (adjust as needed)
}

function stopSliding() {
    clearInterval(intervalId);
}

startSliding(); // Start automatic sliding when the page loads
window.onload = function() {
  var nextButton = document.querySelector('.next') as HTMLButtonElement;

  // Check if nextButton exists before using it
  if (nextButton) {
      // Function to trigger click event on the next button
      function slideNext() {
          nextButton.click();
      }

      // Set interval to call the slideNext function every 3 seconds (adjust the time as needed)
      setInterval(slideNext, 1000); // 3000 milliseconds = 3 seconds
  } else {
      console.error("Next button not found");
  }
  
  window.onload = function() {
    if (window.innerWidth > 768 && !(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|iOS/i.test(navigator.userAgent))) {
        startSliding(); // Start automatic sliding only on larger screens
    }
};


 // Define touchStartX variable
 let touchStartX: number | null = null;

 // Start of the method where touchStartX is being used
 function handleTouchStart(event: TouchEvent) {
     // Assign value to touchStartX
     touchStartX = event.touches[0].clientX;
 }

 function handleTouchMove(event: TouchEvent) {
     // Check if touchStartX is defined
     if (touchStartX !== null) {
         const touchEndX = event.touches[0].clientX;
         const deltaX: number = touchStartX - touchEndX;

         if (deltaX > 0) {
             nextSlide();
         } else {
             prevSlide();
         }
         touchStartX = null;
     }
 }

}


