import { Component, Prop, h } from "@stencil/core";

@Component({
  tag: "pwc-tooltip",
  styleUrl: "pwc-tooltip.css",
  shadow: true
})
export class PWCTooltip {
  /**
   * The tooltip text
   */
  @Prop() tooltipText: string = "Tooltip";

  @Prop() tooltipAlignment: string = "top";

  @Prop() backgroundColor: string = "#000";

  @Prop() tooltipSource: string = "../../assets/information.svg";

  @Prop() sourceWidth: number;
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
