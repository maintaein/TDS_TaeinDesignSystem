import type { Meta, StoryObj } from '@storybook/react';
import { Slider } from '@designsystem/core';
import { useState } from 'react';

const meta = {
  title: 'Components/Slider',
  component: Slider,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    label: 'Slider',
    min: 0,
    max: 100,
    step: 1,
  },
  argTypes: {
    label: {
      control: 'text',
      description: '레이블 텍스트',
    },
    min: {
      control: 'number',
      description: '최소값',
    },
    max: {
      control: 'number',
      description: '최대값',
    },
    step: {
      control: 'number',
      description: '증감 단위',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: '슬라이더 크기',
    },
    showValue: {
      control: 'boolean',
      description: '현재 값 표시 여부',
    },
    disabled: {
      control: 'boolean',
      description: '비활성화 상태',
    },
    required: {
      control: 'boolean',
      description: '필수 입력',
    },
  },
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof meta>;

// 기본
const DefaultComponent = () => {
  const [value, setValue] = useState(50);
  return (
    <div style={{ width: '400px' }}>
      <Slider
        label="볼륨"
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
      />
    </div>
  );
};

export const Default: Story = {
  render: () => <DefaultComponent />,
};

// With Value Display
const WithValueComponent = () => {
  const [value, setValue] = useState(75);
  return (
    <div style={{ width: '400px' }}>
      <Slider
        label="밝기"
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
        showValue
      />
    </div>
  );
};

export const WithValue: Story = {
  render: () => <WithValueComponent />,
};

// Sizes
const SizesComponent = () => {
  const [valueSm, setValueSm] = useState(30);
  const [valueMd, setValueMd] = useState(50);
  const [valueLg, setValueLg] = useState(70);

  return (
    <div
      style={{
        width: '500px',
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem',
      }}
    >
      <div>
        <p
          style={{ margin: '0 0 1rem 0', fontSize: '0.875rem', color: '#666' }}
        >
          Small
        </p>
        <Slider
          label="Small Slider"
          size="sm"
          value={valueSm}
          onChange={(e) => setValueSm(Number(e.target.value))}
          showValue
        />
      </div>
      <div>
        <p
          style={{ margin: '0 0 1rem 0', fontSize: '0.875rem', color: '#666' }}
        >
          Medium (기본)
        </p>
        <Slider
          label="Medium Slider"
          size="md"
          value={valueMd}
          onChange={(e) => setValueMd(Number(e.target.value))}
          showValue
        />
      </div>
      <div>
        <p
          style={{ margin: '0 0 1rem 0', fontSize: '0.875rem', color: '#666' }}
        >
          Large
        </p>
        <Slider
          label="Large Slider"
          size="lg"
          value={valueLg}
          onChange={(e) => setValueLg(Number(e.target.value))}
          showValue
        />
      </div>
    </div>
  );
};

export const Sizes: Story = {
  parameters: { controls: { disable: true } },
  render: () => <SizesComponent />,
};

// Custom Range
const CustomRangeComponent = () => {
  const [value, setValue] = useState(50);
  return (
    <div style={{ width: '400px' }}>
      <Slider
        label="온도 설정"
        min={-20}
        max={40}
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
        showValue
        helperText="-20°C부터 40°C까지 설정할 수 있습니다"
      />
    </div>
  );
};

export const CustomRange: Story = {
  render: () => <CustomRangeComponent />,
};

// With Steps
const WithStepsComponent = () => {
  const [value, setValue] = useState(50);
  return (
    <div style={{ width: '400px' }}>
      <Slider
        label="볼륨 (5 단위)"
        min={0}
        max={100}
        step={5}
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
        showValue
        helperText="5씩 증가합니다"
      />
    </div>
  );
};

export const WithSteps: Story = {
  render: () => <WithStepsComponent />,
};

// With Marks
const WithMarksComponent = () => {
  const [value, setValue] = useState(50);
  const marks = [
    { value: 0, label: '0%' },
    { value: 25, label: '25%' },
    { value: 50, label: '50%' },
    { value: 75, label: '75%' },
    { value: 100, label: '100%' },
  ];

  return (
    <div style={{ width: '500px' }}>
      <Slider
        label="진행률"
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
        showValue
        marks={marks}
      />
    </div>
  );
};

export const WithMarks: Story = {
  render: () => <WithMarksComponent />,
};

// Disabled
const DisabledComponent = () => {
  return (
    <div style={{ width: '400px' }}>
      <Slider
        label="비활성화된 슬라이더"
        value={65}
        disabled
        onChange={() => {}}
        showValue
      />
    </div>
  );
};

export const Disabled: Story = {
  render: () => <DisabledComponent />,
};

// Required
const RequiredComponent = () => {
  const [value, setValue] = useState(0);
  return (
    <div style={{ width: '400px' }}>
      <Slider
        label="필수 설정"
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
        required
        showValue
        helperText="이 설정은 필수입니다"
      />
    </div>
  );
};

export const Required: Story = {
  render: () => <RequiredComponent />,
};

// Volume Control Example
const VolumeControlExample = () => {
  const [volume, setVolume] = useState(70);

  const getVolumeIcon = (vol: number) => {
    if (vol === 0) return '🔇';
    if (vol < 30) return '🔈';
    if (vol < 70) return '🔉';
    return '🔊';
  };

  return (
    <div style={{ width: '400px' }}>
      <div
        style={{
          padding: '1.5rem',
          backgroundColor: '#F5F5F5',
          borderRadius: '8px',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            marginBottom: '1rem',
          }}
        >
          <span style={{ fontSize: '2rem' }}>{getVolumeIcon(volume)}</span>
          <h3 style={{ margin: 0 }}>볼륨 조절</h3>
        </div>
        <Slider
          label="볼륨"
          value={volume}
          onChange={(e) => setVolume(Number(e.target.value))}
          showValue
          helperText="0부터 100까지 조절할 수 있습니다"
        />
      </div>
    </div>
  );
};

export const VolumeControl: Story = {
  parameters: { controls: { disable: true } },
  render: () => <VolumeControlExample />,
};

// Temperature Control Example
const TemperatureControlExample = () => {
  const [temp, setTemp] = useState(22);

  const getTempColor = (temperature: number) => {
    if (temperature < 18) return '#3B82F6';
    if (temperature < 24) return '#10B981';
    return '#EF4444';
  };

  const getTempStatus = (temperature: number) => {
    if (temperature < 18) return '추움';
    if (temperature < 24) return '쾌적';
    return '더움';
  };

  return (
    <div style={{ width: '400px' }}>
      <div
        style={{
          padding: '1.5rem',
          backgroundColor: '#F5F5F5',
          borderRadius: '8px',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '1rem',
          }}
        >
          <h3 style={{ margin: 0 }}>온도 조절</h3>
          <div
            style={{
              padding: '0.5rem 1rem',
              backgroundColor: getTempColor(temp),
              color: 'white',
              borderRadius: '4px',
              fontWeight: 600,
            }}
          >
            {getTempStatus(temp)}
          </div>
        </div>
        <Slider
          label="실내 온도"
          min={16}
          max={30}
          step={0.5}
          value={temp}
          onChange={(e) => setTemp(Number(e.target.value))}
          showValue
          marks={[
            { value: 16, label: '16°C' },
            { value: 20, label: '20°C' },
            { value: 24, label: '24°C' },
            { value: 30, label: '30°C' },
          ]}
        />
      </div>
    </div>
  );
};

export const TemperatureControl: Story = {
  parameters: { controls: { disable: true } },
  render: () => <TemperatureControlExample />,
};

// Price Range Example
const PriceRangeExample = () => {
  const [minPrice, setMinPrice] = useState(10000);
  const [maxPrice, setMaxPrice] = useState(90000);

  return (
    <div style={{ width: '500px' }}>
      <div
        style={{
          padding: '1.5rem',
          backgroundColor: '#F5F5F5',
          borderRadius: '8px',
        }}
      >
        <h3 style={{ margin: '0 0 1.5rem 0' }}>가격 범위 설정</h3>

        <div style={{ marginBottom: '1.5rem' }}>
          <Slider
            label="최소 가격"
            min={0}
            max={100000}
            step={1000}
            value={minPrice}
            onChange={(e) => setMinPrice(Number(e.target.value))}
            showValue
          />
        </div>

        <div style={{ marginBottom: '1.5rem' }}>
          <Slider
            label="최대 가격"
            min={0}
            max={100000}
            step={1000}
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
            showValue
          />
        </div>

        <div
          style={{
            padding: '1rem',
            backgroundColor: '#E3F2FD',
            borderRadius: '4px',
            fontWeight: 600,
          }}
        >
          선택된 범위: {minPrice.toLocaleString()}원 ~{' '}
          {maxPrice.toLocaleString()}원
        </div>
      </div>
    </div>
  );
};

export const PriceRange: Story = {
  parameters: { controls: { disable: true } },
  render: () => <PriceRangeExample />,
};

// All Variants
const AllVariantsComponent = () => {
  const [value1, setValue1] = useState(50);
  const [value2, setValue2] = useState(30);
  const [value3, setValue3] = useState(75);
  const [value4, setValue4] = useState(0);

  return (
    <div
      style={{
        width: '500px',
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem',
      }}
    >
      <div>
        <h3 style={{ margin: '0 0 1rem 0', fontSize: '1rem', fontWeight: 600 }}>
          기본
        </h3>
        <Slider
          label="기본 슬라이더"
          value={value1}
          onChange={(e) => setValue1(Number(e.target.value))}
        />
      </div>

      <div>
        <h3 style={{ margin: '0 0 1rem 0', fontSize: '1rem', fontWeight: 600 }}>
          값 표시
        </h3>
        <Slider
          label="값 표시 슬라이더"
          value={value2}
          onChange={(e) => setValue2(Number(e.target.value))}
          showValue
        />
      </div>

      <div>
        <h3 style={{ margin: '0 0 1rem 0', fontSize: '1rem', fontWeight: 600 }}>
          도움말 포함
        </h3>
        <Slider
          label="도움말 슬라이더"
          value={value3}
          onChange={(e) => setValue3(Number(e.target.value))}
          showValue
          helperText="0부터 100까지 조절할 수 있습니다"
        />
      </div>

      <div>
        <h3 style={{ margin: '0 0 1rem 0', fontSize: '1rem', fontWeight: 600 }}>
          필수
        </h3>
        <Slider
          label="필수 슬라이더"
          value={value4}
          onChange={(e) => setValue4(Number(e.target.value))}
          required
          showValue
          helperText="이 설정은 필수입니다"
        />
      </div>

      <div>
        <h3 style={{ margin: '0 0 1rem 0', fontSize: '1rem', fontWeight: 600 }}>
          비활성화
        </h3>
        <Slider
          label="비활성화된 슬라이더"
          value={65}
          disabled
          onChange={() => {}}
          showValue
        />
      </div>
    </div>
  );
};

export const AllVariants: Story = {
  parameters: { controls: { disable: true } },
  render: () => <AllVariantsComponent />,
};
