import {
  Component,
  ComponentRef,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { Block } from 'src/app/models/block';
// import { BlockNotFoundComponent } from '../../blocks/block-not-found/block-not-found.component';
// import { AdvertisementComponent } from '../../blocks/advertisement/advertisement.component';
// import { PollComponent } from '../../blocks/poll/poll.component';
// import { PostComponent } from '../../blocks/post/post.component';
import { BlocksService } from '../../services/blocks.service';

abstract class DynamicComponent {
  inputData: {} = {};
}

@Component({
  selector: 'app-block-renderer',
  templateUrl: './block-renderer.component.html',
  styleUrls: ['./block-renderer.component.scss'],
})
export class BlockRendererComponent implements OnInit {
  @ViewChild('blockContainer', { static: true, read: ViewContainerRef })
  blockContainer!: ViewContainerRef;

  constructor(private blocksService: BlocksService) {}

  ngOnInit() {
    
  }

  loadComponents() {
    this.blocksService.getAllBlocks().subscribe((blocks) => {
      for (const block of blocks) {
        if (block.blockName && block.inputData) {
          this.loadComponent(block);
        }
      }
    });
  }

  async loadComponent(block: Block) {
    switch (block.blockName) {
      case 'advertisement': {
        const lazyComponent = await import(
          `../../blocks/${block.blockName}/${block.blockName}.component`
        );
        let componentRef: ComponentRef<DynamicComponent> =
          this.blockContainer.createComponent(
            lazyComponent.AdvertisementComponent
          );
        // pass input data into the component instance
        componentRef.instance.inputData = block.inputData;
        break;
      }
      case 'poll': {
        const lazyComponent = await import(
          `../../blocks/${block.blockName}/${block.blockName}.component`
        );
        let componentRef: ComponentRef<DynamicComponent> =
          this.blockContainer.createComponent(lazyComponent.PollComponent);
        // pass input data into the component instance
        componentRef.instance.inputData = block.inputData;
        break;
      }
      case 'post': {
        const lazyComponent = await import(
          `../../blocks/${block.blockName}/${block.blockName}.component`
        );
        let componentRef: ComponentRef<DynamicComponent> =
          this.blockContainer.createComponent(lazyComponent.PostComponent);
        // pass input data into the component instance
        componentRef.instance.inputData = block.inputData;
        break;
      }
      default: {
        
        const lazyComponent = await import(
          `../../blocks/block-not-found/block-not-found.component`
        );
        let componentRef: ComponentRef<DynamicComponent> =
          this.blockContainer.createComponent(lazyComponent.BlockNotFoundComponent);
        // pass input data into the component instance
        const missingBlockData = { missingBlock: block.blockName };
        componentRef.instance.inputData = missingBlockData;
        break;
      }
    }
  }
}
