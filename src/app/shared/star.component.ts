import { Component, OnChanges, SimpleChanges, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector: 'pm-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})

export class StarComponent implements OnChanges {
    @Input() rating: number = 0;
    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>(); 
    public cropWidth: number = 75;

    ngOnChanges(): void {
        this.cropWidth = this.rating * 75/5;
    }

    onClick(): void {
        this.ratingClicked.emit(`The ${this.rating} star was just clicked.`);
    }
}