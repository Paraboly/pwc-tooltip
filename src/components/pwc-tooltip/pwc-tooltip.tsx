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

  @Prop() pointerColor: string = "#000";

  render() {
    const tooltipAlignmentCustomCSS: any = {
      "background-color": `${this.backgroundColor}`
    };

    return (
      <div class="tooltip">
        <img
          alt="icon"
          class="icon-style "
          src="../../assets/information.svg"
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
