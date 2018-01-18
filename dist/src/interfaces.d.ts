export declare namespace IFloater {
    enum Type {
        MODAL = "MODAL",
        POPUP = "POPUP",
        TOAST = "TOAST",
    }
    enum PopupPosition {
        TOP = "TOP",
        BOTTOM = "BOTTOM",
        LEFT = "LEFT",
        RIGHT = "RIGHT",
        AUTO = "AUTO",
    }
    enum PopupTriggerOn {
        CLICK = "CLICK",
        HOVER = "HOVER",
    }
    interface Configuration {
        type: Type;
        contentElement: Element | any;
        expiry?: number;
        popupTargetElement?: HTMLElement;
        popupPosition?: PopupPosition;
        popupTriggerOn?: PopupTriggerOn;
        popupIsScrollableParentSelector?: string;
        guid?: string;
    }
    interface Component {
        show(configuration: IFloater.Configuration): Promise<void> | void;
        destroy(): Promise<void>;
        getContentElementWithSelector(selector: string): Element;
        getFloaterElementFromChild(contentChildElement: Element): Element;
    }
}
