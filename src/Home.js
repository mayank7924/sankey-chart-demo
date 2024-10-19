import React from "react";
import { Sankey, Tooltip } from "recharts";

const data0 = {
  nodes: [
    {
      index: 0,
      name: "Sharaf Exchange",
      amount: "52M AED",
      type: "source",
    },
    {
      index: 1,
      name: "Amex BCS",
      amount: "17M AED",
      type: "source",
    },
    {
      index: 2,
      name: "Quiqup Delivery",
      amount: "2M AED",
      type: "source",
    },
    {
      index: 3,
      name: "Almaluxe general",
      amount: "127k AED",
      type: "source",
    },
    {
      index: 4,
      name: "BNP Paribas Bank",
      amount: "70.4M AED",
      type: "incoming-bank",
    },
    {
      index: 5,
      name: "Commonwealth Bank",
      amount: "18k AED",
      type: "source",
    },
    {
      index: 6,
      name: "HSBC Middle East",
      amount: "4.3k AED",
      type: "incoming-bank",
    },
    {
      index: 7,
      name: "Sephora",
      amount: "171M AED",
      type: "main",
    },
    {
      index: 8,
      name: "BNP Paribas Bank",
      amount: "171M AED",
    },
    {
      index: 9,
      name: "Barclays Bank",
      amount: "171M AED",
    },
    {
      index: 10,
      name: "Salam Studio and Stores",
      amount: "35M AED",
    },
    {
      index: 11,
      name: "Ghadeer Trading",
      amount: "18M AED",
    },
    {
      index: 12,
      name: "Apothecary General",
      amount: "8M AED",
    },
    {
      index: 13,
      name: "Active Creative",
      amount: "6M AED",
    },
    {
      index: 14,
      name: "A AS Shipping",
      amount: "5M AED",
    },
    {
      index: 15,
      name: "Almaluxe Genral",
      amount: "4M AED",
    },
    {
      index: 16,
      name: "Memories Events",
      amount: "3M AED",
    },
    {
      index: 17,
      name: "Rest",
      amount: "12M AED",
    },
  ],
  links: [
    {
      source: 0,
      target: 4,
      value: 52000,
    },
    {
      source: 1,
      target: 4,
      value: 17000,
    },
    {
      source: 2,
      target: 4,
      value: 2000,
    },
    {
      source: 3,
      target: 4,
      value: 1270,
    },
    {
      source: 5,
      target: 4,
      value: 2800,
    },
    {
      source: 5,
      target: 6,
      value: 2500,
    },
    {
      source: 4,
      target: 7,
      value: 70400,
    },
    {
      source: 6,
      target: 7,
      value: 2500,
    },

    {
      source: 7,
      target: 8,
      value: 71400,
    },
    {
      source: 7,
      target: 9,
      value: 1500,
    },
    {
      source: 8,
      target: 10,
      value: 3500,
    },
    {
      source: 8,
      target: 11,
      value: 1500,
    },
    {
      source: 8,
      target: 12,
      value: 1500,
    },
    {
      source: 8,
      target: 13,
      value: 1500,
    },
    {
      source: 8,
      target: 14,
      value: 1500,
    },
    {
      source: 8,
      target: 15,
      value: 1500,
    },
    {
      source: 9,
      target: 15,
      value: 700,
    },
    {
      source: 8,
      target: 16,
      value: 400,
    },
    {
      source: 8,
      target: 17,
      value: 6700,
    },
  ],
};

const colors = ["#3C898E", "#486DF0", "#6F50E5", "#5D898E", "#1D823E"];

const CustomNode = (props) => {
  console.log("props::", props.payload);
  const { x, y, payload } = props;
  const textX = x + 50; // Adjust X position for centering the text horizontally
  const textY = y + 100; // Adjust Y position for centering the text vertically

  if (props.payload.type === "main") {
    return (
      <>
        <rect
          x={props.x + 4}
          y={props.y - 2}
          width={100}
          height={400}
          fill={colors[props.payload.depth % colors.length]}
          rx={2.5}
        />
        <text
          x={textX}
          y={textY}
          textAnchor="middle"
          fill="black"
          fontSize="14"
        >
          {payload.name} {/* Display the node name or any other data */}
        </text>
        <text
          x={textX}
          y={textY + 14}
          textAnchor="middle"
          fill="black"
          fontSize="14"
        >
          {payload.amount} {/* Display the node name or any other data */}
        </text>
      </>
    );
  }
  return (
    <>
      <text
        x={props.x + 5}
        y={props.y - 22}
        textAnchor="middle"
        fill="black"
        fontSize="12"
      >
        {payload.name}
      </text>
      <text
        x={props.x + 5}
        y={props.y - 10}
        textAnchor="middle"
        fill="black"
        fontSize="12"
      >
        {payload.amount}
      </text>
      <rect
        x={props.x + 4}
        y={props.y - 2}
        width={30}
        height={props.height + 4}
        fill={colors[props.payload.depth % colors.length]}
        rx={2.5}
      />
    </>
  );
};

const CustomLink = (props) => {
  return (
    <g>
      <path
        d={`
M${props.sourceX},${props.sourceY}
C${props.sourceControlX},${props.sourceY} ${props.targetControlX},${props.targetY} ${props.targetX},${props.targetY}`}
        fill="none"
        stroke={colors[props.payload.source.depth % colors.length]}
        strokeOpacity={0.4}
        strokeWidth={props.linkWidth}
        strokeLinecap="butt"
      />
      <foreignObject
        x={props.sourceX}
        y={props.targetY - props.linkWidth / 2}
        width={
          Math.max(props.targetX, props.sourceX) -
          Math.min(props.targetX, props.sourceX)
        }
        height={props.linkWidth}
        style={{
          overflow: "visible",
        }}
      >
        {/* <div
          style={{
            boxSizing: "border-box",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            width: "100%",
            height: "100%",
            overflow: "visible",
            padding: "0.5em",
            gap: 8,
          }}
        >
          <div
            style={{
              fontSize: 10,
              fontFamily: "sans-serif",
              textAlign: "center",
              backgroundColor: "#f1f5fe80",
              padding: "0.25em 0.5em",
              borderRadius: 4,
              position: "relative",
              zIndex: 1,
            }}
          >
            {props.payload.target.name ? `${props.payload.target.name}: ` : ""}
            {props.payload.value}
            &nbsp;€
          </div>
        </div> */}
      </foreignObject>
    </g>
  );
};

const SankeyChart = () => {
  return (
    <div>
      <Sankey
        width={1200}
        height={800}
        data={data0}
        node={CustomNode}
        link={CustomLink}
        nodePadding={50}
        margin={{
          left: 200,
          right: 200,
          top: 100,
          bottom: 100,
        }}
      >
        <Tooltip />
      </Sankey>
    </div>
  );
};
export default SankeyChart;
