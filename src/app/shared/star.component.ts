import { Component, OnChanges, SimpleChanges, Input } from "@angular/core";

@Component({
    selector: 'pm-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})

export class StarComponent implements OnChanges {
    @Input() rating: number = 0;
    public cropWidth: number = 75;

    ngOnChanges(): void {
        this.cropWidth = this.rating * 75/5;
    }

    onClick(): void {
        console.log(`The ${this.rating} was just clicked.`);
    }
}