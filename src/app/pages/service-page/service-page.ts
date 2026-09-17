import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-service-page',
  imports: [RouterLink],
  templateUrl: './service-page.html',
  styleUrl: './service-page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServicePage {
  private readonly route = inject(ActivatedRoute);
  protected readonly page = this.route.snapshot.data as { title: string; eyebrow: string; description: string };
}