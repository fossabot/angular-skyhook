/**
 *
 * [[include:Top-Level.md]]
 * @module 1-Top-Level
 * @preferred
 */
/** a second comment */

import 'rxjs/add/operator/take';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMapTo';
import 'rxjs/add/operator/distinctUntilChanged';

export { DndModule } from './dnd.module';

export { DragLayerMonitor } from './internal/internal-monitor';

// the source, target and preview types
export {
  DropTarget,
  DragSource,
  DragLayer
} from './connection-types';

export {
  DropTargetConnector, DragSourceConnector, DragSourceOptions, DragPreviewOptions
} from './connectors';

export { DRAG_DROP_MANAGER, DRAG_DROP_BACKEND } from './tokens';

// direct API
export { DndService } from './connector.service';
export { DropTargetSpec } from './drop-target';
export { DragSourceSpec } from './drag-source';

export { DragSourceDirective, DropTargetDirective, DragPreviewDirective, NoDragPreviewDirective } from './dnd.directive';
