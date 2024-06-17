import { ResponsiveLine } from "@nivo/line";

export default function LinePlot() {

  const data = [
    {
      "id": "japan",
      "color": "hsl(338, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 107
        },
        {
          "x": "helicopter",
          "y": 112
        },
        {
          "x": "boat",
          "y": 35
        },
        {
          "x": "train",
          "y": 222
        },
        {
          "x": "subway",
          "y": 94
        },
        {
          "x": "bus",
          "y": 129
        },
        {
          "x": "car",
          "y": 32
        },
        {
          "x": "moto",
          "y": 90
        },
        {
          "x": "bicycle",
          "y": 245
        },
        {
          "x": "horse",
          "y": 220
        },
        {
          "x": "skateboard",
          "y": 2
        },
        {
          "x": "others",
          "y": 245
        }
      ]
    },
    {
      "id": "france",
      "color": "hsl(306, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 130
        },
        {
          "x": "helicopter",
          "y": 30
        },
        {
          "x": "boat",
          "y": 281
        },
        {
          "x": "train",
          "y": 292
        },
        {
          "x": "subway",
          "y": 273
        },
        {
          "x": "bus",
          "y": 254
        },
        {
          "x": "car",
          "y": 97
        },
        {
          "x": "moto",
          "y": 122
        },
        {
          "x": "bicycle",
          "y": 111
        },
        {
          "x": "horse",
          "y": 67
        },
        {
          "x": "skateboard",
          "y": 104
        },
        {
          "x": "others",
          "y": 237
        }
      ]
    },
    {
      "id": "us",
      "color": "hsl(71, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 279
        },
        {
          "x": "helicopter",
          "y": 270
        },
        {
          "x": "boat",
          "y": 230
        },
        {
          "x": "train",
          "y": 11
        },
        {
          "x": "subway",
          "y": 169
        },
        {
          "x": "bus",
          "y": 57
        },
        {
          "x": "car",
          "y": 210
        },
        {
          "x": "moto",
          "y": 283
        },
        {
          "x": "bicycle",
          "y": 9
        },
        {
          "x": "horse",
          "y": 298
        },
        {
          "x": "skateboard",
          "y": 74
        },
        {
          "x": "others",
          "y": 173
        }
      ]
    },
    {
      "id": "germany",
      "color": "hsl(328, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 61
        },
        {
          "x": "helicopter",
          "y": 123
        },
        {
          "x": "boat",
          "y": 236
        },
        {
          "x": "train",
          "y": 166
        },
        {
          "x": "subway",
          "y": 98
        },
        {
          "x": "bus",
          "y": 31
        },
        {
          "x": "car",
          "y": 33
        },
        {
          "x": "moto",
          "y": 273
        },
        {
          "x": "bicycle",
          "y": 104
        },
        {
          "x": "horse",
          "y": 278
        },
        {
          "x": "skateboard",
          "y": 129
        },
        {
          "x": "others",
          "y": 218
        }
      ]
    },
    {
      "id": "norway",
      "color": "hsl(72, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 256
        },
        {
          "x": "helicopter",
          "y": 249
        },
        {
          "x": "boat",
          "y": 253
        },
        {
          "x": "train",
          "y": 212
        },
        {
          "x": "subway",
          "y": 159
        },
        {
          "x": "bus",
          "y": 187
        },
        {
          "x": "car",
          "y": 233
        },
        {
          "x": "moto",
          "y": 164
        },
        {
          "x": "bicycle",
          "y": 182
        },
        {
          "x": "horse",
          "y": 244
        },
        {
          "x": "skateboard",
          "y": 149
        },
        {
          "x": "others",
          "y": 107
        }
      ]
    }
  ]
  
  return (
    <div className="h-[650px]">
      <ResponsiveLine 
        data={data}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: 'point' }}
        yScale={{ 
            type: 'linear',
            min: 'auto',
            max: 'auto',
            stacked: true,
            reverse: false
         }}
         yFormat=" >-.2f"
         axisTop={null}
         axisRight={null}
         axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'transportation',
            legendOffset: 36,
            legendPosition: 'middle',
            truncateTickAt: 0
         }}
         axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'count',
            legendOffset: -40,
            legendPosition: 'middle',
            truncateTickAt: 0
         }}
         pointSize={10}
         pointColor={{ theme: 'background' }}
         pointBorderWidth={2}
         pointBorderColor={{ from: 'serieColor' }}
         pointLabel="data.yFormatted"
         pointLabelYOffset={-12}
         enableTouchCrosshair={true}
         useMesh={true}
         legends={[
          {
            anchor: 'bottom-right',
            direction: 'column',
            justify: false,
            translateX: 100,
            translateY: 0,
            itemsSpacing: 0,
            itemDirection: 'left-to-right',
            itemWidth: 80,
            itemHeight: 20,
            itemOpacity: 0.75,
            symbolSize: 12,
            symbolShape: 'circle',
            symbolBorderColor: 'rgba(0, 0, 0, .5)',
            effects: [
                {
                    on: 'hover',
                    style: {
                        itemBackground: 'rgba(0, 0, 0, .03)',
                        itemOpacity: 1
                    }
                }
            ]
        }
         ]}
      />
    </div>
  )
}
