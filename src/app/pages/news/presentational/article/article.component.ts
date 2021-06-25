import {
  Component,
  ChangeDetectionStrategy,
  Input,
  OnChanges,
  SimpleChanges,
} from "@angular/core";

@Component({
  selector: "news-article",
  templateUrl: "./article.component.html",
  styleUrls: ["./article.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArticleComponent implements OnChanges {
  @Input() sourceName: string = "";
  @Input() autor: string = "";
  @Input() publishedAt: string = "";
  @Input() title: string = "";
  @Input() description: string = "";
  @Input() url: string = "";
  @Input() urlToImage: string = "";
  @Input() content: string = "";
  public publishedAtDate: Date | undefined;

  ngOnChanges(changes: SimpleChanges) {
    if (changes?.publishedAt) {
      this.publishedAtDate = this.publishedAt
        ? new Date(this.publishedAt)
        : undefined;
    }
  }
}
