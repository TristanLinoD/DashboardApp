import React from 'react';
import { SparklineComponent, Inject, SparklineTooltip } from '@syncfusion/ej2-react-charts';

// WHY IS NOT WORKING WITH FUNCTIONS
// const SparkLine = ({id, height, width, color, data, type, currentColor}) => {
//   return (
//     <SparklineComponent id={id} height={height} width={width} lineWidth={1} valueType="Numeric" fill={color} border={{ color: currentColor, width: 2}} dataSource={data} xName="x" yName='y' type={type}>
//       {/* <Inject services={[SparklineTooltip]} /> */}
//     </SparklineComponent>
//   );
// };
// class SparkLine extends React.Component {

//   render() {
//     return (<SparklineComponent id={this.props.id}
//       height={this.props.height}
//       width={this.props.width}
//       lineWidth={1}
//       valueType="Numeric"
//       fill={this.props.color}
//       border={{ color: this.props.currentColor, width: 2 }}
//       dataSource={this.props.data}
//       xName="x"
//       yName="yval"
//       type={this.props.type}
//       tooltipSettings={{visible: true, format: '${x} : data ${yval}', trackLineSettings: {visible: true}}}
//       >
//     <Inject services={[SparklineTooltip]}/>
// </SparklineComponent>);
//   }
// }
class SparkLine extends React.PureComponent {
  render() {
    const { id, height, width, color, data, type, currentColor } = this.props;

    return (
      <SparklineComponent
        id={id}
        height={height}
        width={width}
        lineWidth={1}
        valueType="Numeric"
        fill={color}
        border={{ color: currentColor, width: 2 }}
        tooltipSettings={{
          visible: true,
          // eslint-disable-next-line no-template-curly-in-string
          format: '${x} : data ${yval}',
          trackLineSettings: {
            visible: true,
          },
        }}
        markerSettings={{ visible: ['All'], size: 2.5, fill: currentColor }}
        dataSource={data}
        xName="x"
        yName="yval"
        type={type}
      >
        <Inject services={[SparklineTooltip]} />
      </SparklineComponent>
    );
  }
}

export default SparkLine