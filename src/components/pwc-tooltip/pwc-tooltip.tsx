import { Component, Prop, h } from "@stencil/core";

@Component({
  tag: "pwc-tooltip",
  styleUrl: "pwc-tooltip.css",
  shadow: true
})
export class PWCTooltip {
  /**
   * Tooltip content text
   */
  @Prop() tooltipText: string = "Tooltip";

  /**
   * Tooltip alignment prop to where the tooltip will appear
   */
  @Prop() tooltipAlignment: string = "top";

  /**
   * Tooltip background color
   */
  @Prop() backgroundColor: string = "#000";

  /**
   * Tooltip shown source
   */
  @Prop() tooltipSource: string = "../../assets/information.svg";

  /**
   * Tooltip source's width
   */
  @Prop() sourceWidth: number;

  /**
   * Tooltip source's height
   */
  @Prop() sourceHeight: number;

  render() {
    const tooltipAlignmentCustomCSS: any = {
      "background-color": `${this.backgroundColor}`
    };

    const iconStyleCustomCSS: any = {
      width: `${this.sourceWidth}px`,
      height: `${this.sourceHeight}px`
    };

    return (
      <div class="tooltip">
        <img
          alt="icon"
          class="icon-style"
          style={iconStyleCustomCSS}
          src={`${this.tooltipSource}`}
        />
        <div
          class={`${this.tooltipAlignment}`}
          style={tooltipAlignmentCustomCSS}
        >
          <h3>{this.tooltipText}</h3>
          <i></i> {/* DO NOT TOUCH ! IT CREATES THE TOOLTIP POINTER */}
          <slot />
        </div>
      </div>
    );
  }
}
