/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, } from '@angular/core';
import { HotTableComponent } from './hot-table.component';
export class HotColumnComponent {
    /**
     * @param {?} parentComponent
     */
    constructor(parentComponent) {
        this.parentComponent = parentComponent;
        this.firstRun = true;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.firstRun = false;
        this.parentComponent.addColumn(this);
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        if (this.firstRun) {
            return;
        }
        this.parentComponent.onAfterColumnsChange();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.parentComponent.removeColumn(this);
    }
}
HotColumnComponent.decorators = [
    { type: Component, args: [{
                selector: 'hot-column',
                template: ''
            }] }
];
/** @nocollapse */
HotColumnComponent.ctorParameters = () => [
    { type: HotTableComponent }
];
HotColumnComponent.propDecorators = {
    allowEmpty: [{ type: Input }],
    allowHtml: [{ type: Input }],
    allowInvalid: [{ type: Input }],
    checkedTemplate: [{ type: Input }],
    className: [{ type: Input }],
    columnSorting: [{ type: Input }],
    colWidths: [{ type: Input }],
    commentedCellClassName: [{ type: Input }],
    copyable: [{ type: Input }],
    correctFormat: [{ type: Input }],
    data: [{ type: Input }],
    dateFormat: [{ type: Input }],
    defaultDate: [{ type: Input }],
    editor: [{ type: Input }],
    filteringCaseSensitive: [{ type: Input }],
    invalidCellClassName: [{ type: Input }],
    label: [{ type: Input }],
    language: [{ type: Input }],
    noWordWrapClassName: [{ type: Input }],
    numericFormat: [{ type: Input }],
    placeholder: [{ type: Input }],
    placeholderCellClassName: [{ type: Input }],
    readOnly: [{ type: Input }],
    readOnlyCellClassName: [{ type: Input }],
    renderer: [{ type: Input }],
    selectOptions: [{ type: Input }],
    skipColumnOnPaste: [{ type: Input }],
    sortByRelevance: [{ type: Input }],
    source: [{ type: Input }],
    strict: [{ type: Input }],
    title: [{ type: Input }],
    trimDropdown: [{ type: Input }],
    type: [{ type: Input }],
    uncheckedTemplate: [{ type: Input }],
    validator: [{ type: Input }],
    visibleRows: [{ type: Input }],
    width: [{ type: Input }],
    wordWrap: [{ type: Input }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    HotColumnComponent.prototype.firstRun;
    /** @type {?} */
    HotColumnComponent.prototype.allowEmpty;
    /** @type {?} */
    HotColumnComponent.prototype.allowHtml;
    /** @type {?} */
    HotColumnComponent.prototype.allowInvalid;
    /** @type {?} */
    HotColumnComponent.prototype.checkedTemplate;
    /** @type {?} */
    HotColumnComponent.prototype.className;
    /** @type {?} */
    HotColumnComponent.prototype.columnSorting;
    /** @type {?} */
    HotColumnComponent.prototype.colWidths;
    /** @type {?} */
    HotColumnComponent.prototype.commentedCellClassName;
    /** @type {?} */
    HotColumnComponent.prototype.copyable;
    /** @type {?} */
    HotColumnComponent.prototype.correctFormat;
    /** @type {?} */
    HotColumnComponent.prototype.data;
    /** @type {?} */
    HotColumnComponent.prototype.dateFormat;
    /** @type {?} */
    HotColumnComponent.prototype.defaultDate;
    /** @type {?} */
    HotColumnComponent.prototype.editor;
    /** @type {?} */
    HotColumnComponent.prototype.filteringCaseSensitive;
    /** @type {?} */
    HotColumnComponent.prototype.invalidCellClassName;
    /** @type {?} */
    HotColumnComponent.prototype.label;
    /** @type {?} */
    HotColumnComponent.prototype.language;
    /** @type {?} */
    HotColumnComponent.prototype.noWordWrapClassName;
    /** @type {?} */
    HotColumnComponent.prototype.numericFormat;
    /** @type {?} */
    HotColumnComponent.prototype.placeholder;
    /** @type {?} */
    HotColumnComponent.prototype.placeholderCellClassName;
    /** @type {?} */
    HotColumnComponent.prototype.readOnly;
    /** @type {?} */
    HotColumnComponent.prototype.readOnlyCellClassName;
    /** @type {?} */
    HotColumnComponent.prototype.renderer;
    /** @type {?} */
    HotColumnComponent.prototype.selectOptions;
    /** @type {?} */
    HotColumnComponent.prototype.skipColumnOnPaste;
    /** @type {?} */
    HotColumnComponent.prototype.sortByRelevance;
    /** @type {?} */
    HotColumnComponent.prototype.source;
    /** @type {?} */
    HotColumnComponent.prototype.strict;
    /** @type {?} */
    HotColumnComponent.prototype.title;
    /** @type {?} */
    HotColumnComponent.prototype.trimDropdown;
    /** @type {?} */
    HotColumnComponent.prototype.type;
    /** @type {?} */
    HotColumnComponent.prototype.uncheckedTemplate;
    /** @type {?} */
    HotColumnComponent.prototype.validator;
    /** @type {?} */
    HotColumnComponent.prototype.visibleRows;
    /** @type {?} */
    HotColumnComponent.prototype.width;
    /** @type {?} */
    HotColumnComponent.prototype.wordWrap;
    /**
     * @type {?}
     * @private
     */
    HotColumnComponent.prototype.parentComponent;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG90LWNvbHVtbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AaGFuZHNvbnRhYmxlL2FuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvaG90LWNvbHVtbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBSVQsS0FBSyxHQUNOLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBTzFELE1BQU0sT0FBTyxrQkFBa0I7Ozs7SUEwQzdCLFlBQW9CLGVBQWtDO1FBQWxDLG9CQUFlLEdBQWYsZUFBZSxDQUFtQjtRQXpDOUMsYUFBUSxHQUFHLElBQUksQ0FBQztJQXlDaUMsQ0FBQzs7OztJQUUxRCxRQUFRO1FBQ04sSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7UUFDdEIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdkMsQ0FBQzs7OztJQUVELFdBQVc7UUFDVCxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsT0FBTztTQUNSO1FBRUQsSUFBSSxDQUFDLGVBQWUsQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO0lBQzlDLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLGVBQWUsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUMsQ0FBQzs7O1lBL0RGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsWUFBWTtnQkFDdEIsUUFBUSxFQUFFLEVBQUU7YUFDYjs7OztZQU5RLGlCQUFpQjs7O3lCQVV2QixLQUFLO3dCQUNMLEtBQUs7MkJBQ0wsS0FBSzs4QkFDTCxLQUFLO3dCQUNMLEtBQUs7NEJBQ0wsS0FBSzt3QkFDTCxLQUFLO3FDQUNMLEtBQUs7dUJBQ0wsS0FBSzs0QkFDTCxLQUFLO21CQUNMLEtBQUs7eUJBQ0wsS0FBSzswQkFDTCxLQUFLO3FCQUNMLEtBQUs7cUNBQ0wsS0FBSzttQ0FDTCxLQUFLO29CQUNMLEtBQUs7dUJBQ0wsS0FBSztrQ0FDTCxLQUFLOzRCQUNMLEtBQUs7MEJBQ0wsS0FBSzt1Q0FDTCxLQUFLO3VCQUNMLEtBQUs7b0NBQ0wsS0FBSzt1QkFDTCxLQUFLOzRCQUNMLEtBQUs7Z0NBQ0wsS0FBSzs4QkFDTCxLQUFLO3FCQUNMLEtBQUs7cUJBQ0wsS0FBSztvQkFDTCxLQUFLOzJCQUNMLEtBQUs7bUJBQ0wsS0FBSztnQ0FDTCxLQUFLO3dCQUNMLEtBQUs7MEJBQ0wsS0FBSztvQkFDTCxLQUFLO3VCQUNMLEtBQUs7Ozs7Ozs7SUF2Q04sc0NBQXdCOztJQUV4Qix3Q0FBK0Q7O0lBQy9ELHVDQUE2RDs7SUFDN0QsMENBQW1FOztJQUNuRSw2Q0FBeUU7O0lBQ3pFLHVDQUE2RDs7SUFDN0QsMkNBQXFFOztJQUNyRSx1Q0FBNkQ7O0lBQzdELG9EQUF1Rjs7SUFDdkYsc0NBQTJEOztJQUMzRCwyQ0FBcUU7O0lBQ3JFLGtDQUFtRDs7SUFDbkQsd0NBQStEOztJQUMvRCx5Q0FBaUU7O0lBQ2pFLG9DQUF1RDs7SUFDdkQsb0RBQXVGOztJQUN2RixrREFBbUY7O0lBQ25GLG1DQUFxRDs7SUFDckQsc0NBQTJEOztJQUMzRCxpREFBaUY7O0lBQ2pGLDJDQUFxRTs7SUFDckUseUNBQWlFOztJQUNqRSxzREFBMkY7O0lBQzNGLHNDQUEyRDs7SUFDM0QsbURBQXFGOztJQUNyRixzQ0FBMkQ7O0lBQzNELDJDQUFxRTs7SUFDckUsK0NBQTZFOztJQUM3RSw2Q0FBeUU7O0lBQ3pFLG9DQUF1RDs7SUFDdkQsb0NBQXVEOztJQUN2RCxtQ0FBcUQ7O0lBQ3JELDBDQUFtRTs7SUFDbkUsa0NBQW1EOztJQUNuRCwrQ0FBNkU7O0lBQzdFLHVDQUE2RDs7SUFDN0QseUNBQWlFOztJQUNqRSxtQ0FBcUQ7O0lBQ3JELHNDQUEyRDs7Ozs7SUFFL0MsNkNBQTBDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBPbkluaXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBJbnB1dCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIb3RUYWJsZUNvbXBvbmVudCB9IGZyb20gJy4vaG90LXRhYmxlLmNvbXBvbmVudCc7XG5pbXBvcnQgSGFuZHNvbnRhYmxlIGZyb20gJ2hhbmRzb250YWJsZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2hvdC1jb2x1bW4nLFxuICB0ZW1wbGF0ZTogJycsXG59KVxuZXhwb3J0IGNsYXNzIEhvdENvbHVtbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xuICBwcml2YXRlIGZpcnN0UnVuID0gdHJ1ZTtcbiAgLy8gaGFuZHNvbnRhYmxlIGNvbHVtbiBvcHRpb25zXG4gIEBJbnB1dCgpIGFsbG93RW1wdHk6IEhhbmRzb250YWJsZS5Db2x1bW5TZXR0aW5nc1snYWxsb3dFbXB0eSddO1xuICBASW5wdXQoKSBhbGxvd0h0bWw6IEhhbmRzb250YWJsZS5Db2x1bW5TZXR0aW5nc1snYWxsb3dIdG1sJ107XG4gIEBJbnB1dCgpIGFsbG93SW52YWxpZDogSGFuZHNvbnRhYmxlLkNvbHVtblNldHRpbmdzWydhbGxvd0ludmFsaWQnXTtcbiAgQElucHV0KCkgY2hlY2tlZFRlbXBsYXRlOiBIYW5kc29udGFibGUuQ29sdW1uU2V0dGluZ3NbJ2NoZWNrZWRUZW1wbGF0ZSddO1xuICBASW5wdXQoKSBjbGFzc05hbWU6IEhhbmRzb250YWJsZS5Db2x1bW5TZXR0aW5nc1snY2xhc3NOYW1lJ107XG4gIEBJbnB1dCgpIGNvbHVtblNvcnRpbmc6IEhhbmRzb250YWJsZS5Db2x1bW5TZXR0aW5nc1snY29sdW1uU29ydGluZyddO1xuICBASW5wdXQoKSBjb2xXaWR0aHM6IEhhbmRzb250YWJsZS5Db2x1bW5TZXR0aW5nc1snY29sV2lkdGhzJ107XG4gIEBJbnB1dCgpIGNvbW1lbnRlZENlbGxDbGFzc05hbWU6IEhhbmRzb250YWJsZS5Db2x1bW5TZXR0aW5nc1snY29tbWVudGVkQ2VsbENsYXNzTmFtZSddO1xuICBASW5wdXQoKSBjb3B5YWJsZTogSGFuZHNvbnRhYmxlLkNvbHVtblNldHRpbmdzWydjb3B5YWJsZSddO1xuICBASW5wdXQoKSBjb3JyZWN0Rm9ybWF0OiBIYW5kc29udGFibGUuQ29sdW1uU2V0dGluZ3NbJ2NvcnJlY3RGb3JtYXQnXTtcbiAgQElucHV0KCkgZGF0YTogSGFuZHNvbnRhYmxlLkNvbHVtblNldHRpbmdzWydkYXRhJ107XG4gIEBJbnB1dCgpIGRhdGVGb3JtYXQ6IEhhbmRzb250YWJsZS5Db2x1bW5TZXR0aW5nc1snZGF0ZUZvcm1hdCddO1xuICBASW5wdXQoKSBkZWZhdWx0RGF0ZTogSGFuZHNvbnRhYmxlLkNvbHVtblNldHRpbmdzWydkZWZhdWx0RGF0ZSddO1xuICBASW5wdXQoKSBlZGl0b3I6IEhhbmRzb250YWJsZS5Db2x1bW5TZXR0aW5nc1snZWRpdG9yJ107XG4gIEBJbnB1dCgpIGZpbHRlcmluZ0Nhc2VTZW5zaXRpdmU6IEhhbmRzb250YWJsZS5Db2x1bW5TZXR0aW5nc1snZmlsdGVyaW5nQ2FzZVNlbnNpdGl2ZSddO1xuICBASW5wdXQoKSBpbnZhbGlkQ2VsbENsYXNzTmFtZTogSGFuZHNvbnRhYmxlLkNvbHVtblNldHRpbmdzWydpbnZhbGlkQ2VsbENsYXNzTmFtZSddO1xuICBASW5wdXQoKSBsYWJlbDogSGFuZHNvbnRhYmxlLkNvbHVtblNldHRpbmdzWydsYWJlbCddO1xuICBASW5wdXQoKSBsYW5ndWFnZTogSGFuZHNvbnRhYmxlLkNvbHVtblNldHRpbmdzWydsYW5ndWFnZSddO1xuICBASW5wdXQoKSBub1dvcmRXcmFwQ2xhc3NOYW1lOiBIYW5kc29udGFibGUuQ29sdW1uU2V0dGluZ3NbJ25vV29yZFdyYXBDbGFzc05hbWUnXTtcbiAgQElucHV0KCkgbnVtZXJpY0Zvcm1hdDogSGFuZHNvbnRhYmxlLkNvbHVtblNldHRpbmdzWydudW1lcmljRm9ybWF0J107XG4gIEBJbnB1dCgpIHBsYWNlaG9sZGVyOiBIYW5kc29udGFibGUuQ29sdW1uU2V0dGluZ3NbJ3BsYWNlaG9sZGVyJ107XG4gIEBJbnB1dCgpIHBsYWNlaG9sZGVyQ2VsbENsYXNzTmFtZTogSGFuZHNvbnRhYmxlLkNvbHVtblNldHRpbmdzWydwbGFjZWhvbGRlckNlbGxDbGFzc05hbWUnXTtcbiAgQElucHV0KCkgcmVhZE9ubHk6IEhhbmRzb250YWJsZS5Db2x1bW5TZXR0aW5nc1sncmVhZE9ubHknXTtcbiAgQElucHV0KCkgcmVhZE9ubHlDZWxsQ2xhc3NOYW1lOiBIYW5kc29udGFibGUuQ29sdW1uU2V0dGluZ3NbJ3JlYWRPbmx5Q2VsbENsYXNzTmFtZSddO1xuICBASW5wdXQoKSByZW5kZXJlcjogSGFuZHNvbnRhYmxlLkNvbHVtblNldHRpbmdzWydyZW5kZXJlciddO1xuICBASW5wdXQoKSBzZWxlY3RPcHRpb25zOiBIYW5kc29udGFibGUuQ29sdW1uU2V0dGluZ3NbJ3NlbGVjdE9wdGlvbnMnXTtcbiAgQElucHV0KCkgc2tpcENvbHVtbk9uUGFzdGU6IEhhbmRzb250YWJsZS5Db2x1bW5TZXR0aW5nc1snc2tpcENvbHVtbk9uUGFzdGUnXTtcbiAgQElucHV0KCkgc29ydEJ5UmVsZXZhbmNlOiBIYW5kc29udGFibGUuQ29sdW1uU2V0dGluZ3NbJ3NvcnRCeVJlbGV2YW5jZSddO1xuICBASW5wdXQoKSBzb3VyY2U6IEhhbmRzb250YWJsZS5Db2x1bW5TZXR0aW5nc1snc291cmNlJ107XG4gIEBJbnB1dCgpIHN0cmljdDogSGFuZHNvbnRhYmxlLkNvbHVtblNldHRpbmdzWydzdHJpY3QnXTtcbiAgQElucHV0KCkgdGl0bGU6IEhhbmRzb250YWJsZS5Db2x1bW5TZXR0aW5nc1sndGl0bGUnXTtcbiAgQElucHV0KCkgdHJpbURyb3Bkb3duOiBIYW5kc29udGFibGUuQ29sdW1uU2V0dGluZ3NbJ3RyaW1Ecm9wZG93biddO1xuICBASW5wdXQoKSB0eXBlOiBIYW5kc29udGFibGUuQ29sdW1uU2V0dGluZ3NbJ3R5cGUnXTtcbiAgQElucHV0KCkgdW5jaGVja2VkVGVtcGxhdGU6IEhhbmRzb250YWJsZS5Db2x1bW5TZXR0aW5nc1sndW5jaGVja2VkVGVtcGxhdGUnXTtcbiAgQElucHV0KCkgdmFsaWRhdG9yOiBIYW5kc29udGFibGUuQ29sdW1uU2V0dGluZ3NbJ3ZhbGlkYXRvciddO1xuICBASW5wdXQoKSB2aXNpYmxlUm93czogSGFuZHNvbnRhYmxlLkNvbHVtblNldHRpbmdzWyd2aXNpYmxlUm93cyddO1xuICBASW5wdXQoKSB3aWR0aDogSGFuZHNvbnRhYmxlLkNvbHVtblNldHRpbmdzWyd3aWR0aCddO1xuICBASW5wdXQoKSB3b3JkV3JhcDogSGFuZHNvbnRhYmxlLkNvbHVtblNldHRpbmdzWyd3b3JkV3JhcCddO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcGFyZW50Q29tcG9uZW50OiBIb3RUYWJsZUNvbXBvbmVudCkge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmZpcnN0UnVuID0gZmFsc2U7XG4gICAgdGhpcy5wYXJlbnRDb21wb25lbnQuYWRkQ29sdW1uKHRoaXMpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZmlyc3RSdW4pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnBhcmVudENvbXBvbmVudC5vbkFmdGVyQ29sdW1uc0NoYW5nZSgpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5wYXJlbnRDb21wb25lbnQucmVtb3ZlQ29sdW1uKHRoaXMpO1xuICB9XG59XG4iXX0=