import {
  Component,
  ComponentRef,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { BlockNotFoundComponent } from '../../blocks/block-not-found/block-not-found.component';
import { AdvertisementComponent } from '../../blocks/advertisement/advertisement.component';
import { PollComponent } from '../../blocks/poll/poll.component';
import { PostComponent } from '../../blocks/post/post.component';
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
    this.blocksService.getAllBlocks().subscribe((blocks) => {
      for (const block of blocks) {
        if (block.blockType && block.inputData) {
          let componentType = this.getType(block.blockType);
          let componentRef: ComponentRef<{}> =
            this.blockContainer.createComponent(componentType);
          let instance = <DynamicComponent>componentRef.instance;
          console.log(instance);

          instance.inputData = block.inputData;
        }
      }
    });
  }

  getType(typeName: string) {
    switch (typeName) {
      case 'advertisement': {
        return AdvertisementComponent;
        break;
      }
      case 'poll': {
        return PollComponent;
        break;
      }
      case 'post': {
        return PostComponent;
        break;
      }
      default: {
        return BlockNotFoundComponent;
        break;
      }
    }
  }
}
