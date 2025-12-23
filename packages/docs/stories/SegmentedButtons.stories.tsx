import type { Meta, StoryObj } from '@storybook/react';
import { SegmentedButtons } from '@designsystem/core';
import { useState } from 'react';

// 아이콘 컴포넌트들
const HomeIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
  >
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" strokeWidth="2" />
  </svg>
);

const SearchIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
  >
    <circle cx="11" cy="11" r="8" strokeWidth="2" />
    <path d="m21 21-4.35-4.35" strokeWidth="2" />
  </svg>
);

const StarIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
  >
    <path
      d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
      strokeWidth="2"
    />
  </svg>
);

const UserIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
  >
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" strokeWidth="2" />
    <circle cx="12" cy="7" r="4" strokeWidth="2" />
  </svg>
);

const meta = {
  title: 'Components/SegmentedButtons',
  component: SegmentedButtons,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    options: [
      { label: 'Option 1', value: '1' },
      { label: 'Option 2', value: '2' },
      { label: 'Option 3', value: '3' },
    ],
    value: '1',
    onChange: (val) => console.log(val),
  },
  argTypes: {
    options: {
      control: 'object',
      description: '옵션 목록',
    },
    value: {
      control: 'text',
      description: '선택된 값',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: '크기',
    },
    fullWidth: {
      control: 'boolean',
      description: '전체 너비 사용',
    },
    disabled: {
      control: 'boolean',
      description: '비활성화 상태',
    },
  },
} satisfies Meta<typeof SegmentedButtons>;

export default meta;
type Story = StoryObj<typeof meta>;

// 기본
const DefaultComponent = () => {
  const [value, setValue] = useState('option1');
  return (
    <SegmentedButtons
      options={[
        { value: 'option1', label: '옵션 1' },
        { value: 'option2', label: '옵션 2' },
        { value: 'option3', label: '옵션 3' },
      ]}
      value={value}
      onChange={setValue}
      aria-label="기본 세그먼트 버튼"
    />
  );
};

export const Default: Story = {
  render: () => <DefaultComponent />,
};

// Sizes
const SizesComponent = () => {
  const [valueSmall, setValueSmall] = useState('option1');
  const [valueMedium, setValueMedium] = useState('option2');
  const [valueLarge, setValueLarge] = useState('option3');

  const options = [
    { value: 'option1', label: '옵션 1' },
    { value: 'option2', label: '옵션 2' },
    { value: 'option3', label: '옵션 3' },
  ];

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1.5rem',
        alignItems: 'flex-start',
      }}
    >
      <div>
        <p
          style={{
            margin: '0 0 0.5rem 0',
            fontSize: '0.875rem',
            color: '#666',
          }}
        >
          Small
        </p>
        <SegmentedButtons
          options={options}
          value={valueSmall}
          onChange={setValueSmall}
          size="sm"
          aria-label="작은 세그먼트 버튼"
        />
      </div>
      <div>
        <p
          style={{
            margin: '0 0 0.5rem 0',
            fontSize: '0.875rem',
            color: '#666',
          }}
        >
          Medium (기본)
        </p>
        <SegmentedButtons
          options={options}
          value={valueMedium}
          onChange={setValueMedium}
          size="md"
          aria-label="중간 세그먼트 버튼"
        />
      </div>
      <div>
        <p
          style={{
            margin: '0 0 0.5rem 0',
            fontSize: '0.875rem',
            color: '#666',
          }}
        >
          Large
        </p>
        <SegmentedButtons
          options={options}
          value={valueLarge}
          onChange={setValueLarge}
          size="lg"
          aria-label="큰 세그먼트 버튼"
        />
      </div>
    </div>
  );
};

export const Sizes: Story = {
  parameters: { controls: { disable: true } },
  render: () => <SizesComponent />,
};

// With Icons
const WithIconsComponent = () => {
  const [value, setValue] = useState('home');
  return (
    <SegmentedButtons
      options={[
        { value: 'home', label: '홈', icon: <HomeIcon /> },
        { value: 'search', label: '검색', icon: <SearchIcon /> },
        { value: 'favorites', label: '즐겨찾기', icon: <StarIcon /> },
        { value: 'profile', label: '프로필', icon: <UserIcon /> },
      ]}
      value={value}
      onChange={setValue}
      aria-label="아이콘이 있는 세그먼트 버튼"
    />
  );
};

export const WithIcons: Story = {
  render: () => <WithIconsComponent />,
};

// Icon Only
const IconOnlyComponent = () => {
  const [value, setValue] = useState('home');
  return (
    <SegmentedButtons
      options={[
        { value: 'home', label: '홈', icon: <HomeIcon />, iconOnly: true },
        {
          value: 'search',
          label: '검색',
          icon: <SearchIcon />,
          iconOnly: true,
        },
        {
          value: 'favorites',
          label: '즐겨찾기',
          icon: <StarIcon />,
          iconOnly: true,
        },
        {
          value: 'profile',
          label: '프로필',
          icon: <UserIcon />,
          iconOnly: true,
        },
      ]}
      value={value}
      onChange={setValue}
      aria-label="아이콘만 있는 세그먼트 버튼"
    />
  );
};

export const IconOnly: Story = {
  render: () => <IconOnlyComponent />,
};

// Full Width
const FullWidthComponent = () => {
  const [value, setValue] = useState('option1');
  return (
    <div style={{ width: '500px' }}>
      <SegmentedButtons
        options={[
          { value: 'option1', label: '옵션 1' },
          { value: 'option2', label: '옵션 2' },
          { value: 'option3', label: '옵션 3' },
        ]}
        value={value}
        onChange={setValue}
        fullWidth
        aria-label="전체 너비 세그먼트 버튼"
      />
    </div>
  );
};

export const FullWidth: Story = {
  render: () => <FullWidthComponent />,
};

// Disabled
const DisabledComponent = () => {
  const [value, setValue] = useState('option1');
  return (
    <SegmentedButtons
      options={[
        { value: 'option1', label: '옵션 1' },
        { value: 'option2', label: '옵션 2' },
        { value: 'option3', label: '옵션 3' },
      ]}
      value={value}
      onChange={setValue}
      disabled
      aria-label="비활성화된 세그먼트 버튼"
    />
  );
};

export const Disabled: Story = {
  render: () => <DisabledComponent />,
};

// Individual Disabled Options
const IndividualDisabledComponent = () => {
  const [value, setValue] = useState('option1');
  return (
    <SegmentedButtons
      options={[
        { value: 'option1', label: '옵션 1' },
        { value: 'option2', label: '옵션 2', disabled: true },
        { value: 'option3', label: '옵션 3' },
      ]}
      value={value}
      onChange={setValue}
      aria-label="일부 비활성화된 세그먼트 버튼"
    />
  );
};

export const IndividualDisabled: Story = {
  render: () => <IndividualDisabledComponent />,
};

// View Mode Switcher Example
const ViewModeSwitcherExample = () => {
  const [view, setView] = useState('grid');

  return (
    <div style={{ width: '600px' }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '1rem',
        }}
      >
        <h3 style={{ margin: 0, fontSize: '1.125rem', fontWeight: 600 }}>
          상품 목록
        </h3>
        <SegmentedButtons
          options={[
            { value: 'list', label: '리스트' },
            { value: 'grid', label: '그리드' },
            { value: 'compact', label: '컴팩트' },
          ]}
          value={view}
          onChange={setView}
          size="sm"
          aria-label="보기 모드 선택"
        />
      </div>
      <div
        style={{
          padding: '2rem',
          backgroundColor: '#F5F5F5',
          borderRadius: '8px',
          textAlign: 'center',
          color: '#666',
        }}
      >
        현재 보기:{' '}
        <strong>
          {view === 'list' ? '리스트' : view === 'grid' ? '그리드' : '컴팩트'}
        </strong>{' '}
        모드
      </div>
    </div>
  );
};

export const ViewModeSwitcher: Story = {
  parameters: { controls: { disable: true } },
  render: () => <ViewModeSwitcherExample />,
};

// Chart Type Selector Example
const ChartTypeSelectorExample = () => {
  const [chartType, setChartType] = useState('line');

  return (
    <div style={{ width: '600px' }}>
      <div style={{ marginBottom: '1.5rem' }}>
        <SegmentedButtons
          options={[
            { value: 'line', label: '선 그래프' },
            { value: 'bar', label: '막대 그래프' },
            { value: 'pie', label: '원형 그래프' },
            { value: 'area', label: '영역 그래프' },
          ]}
          value={chartType}
          onChange={setChartType}
          fullWidth
          aria-label="차트 유형 선택"
        />
      </div>
      <div
        style={{
          padding: '3rem',
          backgroundColor: '#E3F2FD',
          borderRadius: '8px',
          textAlign: 'center',
          fontSize: '1.125rem',
        }}
      >
        {chartType === 'line' && '📈 선 그래프'}
        {chartType === 'bar' && '📊 막대 그래프'}
        {chartType === 'pie' && '🥧 원형 그래프'}
        {chartType === 'area' && '📉 영역 그래프'}
      </div>
    </div>
  );
};

export const ChartTypeSelector: Story = {
  parameters: { controls: { disable: true } },
  render: () => <ChartTypeSelectorExample />,
};

// Time Period Selector Example
const TimePeriodSelectorExample = () => {
  const [period, setPeriod] = useState('week');

  const getData = (period: string) => {
    const data = {
      day: { label: '오늘', value: '125건', change: '+12%' },
      week: { label: '이번 주', value: '842건', change: '+8%' },
      month: { label: '이번 달', value: '3,521건', change: '+15%' },
      year: { label: '올해', value: '42,156건', change: '+23%' },
    };
    return data[period as keyof typeof data];
  };

  const currentData = getData(period);

  return (
    <div style={{ width: '500px' }}>
      <h3
        style={{ margin: '0 0 1rem 0', fontSize: '1.125rem', fontWeight: 600 }}
      >
        거래 현황
      </h3>
      <SegmentedButtons
        options={[
          { value: 'day', label: '일간' },
          { value: 'week', label: '주간' },
          { value: 'month', label: '월간' },
          { value: 'year', label: '연간' },
        ]}
        value={period}
        onChange={setPeriod}
        fullWidth
        aria-label="기간 선택"
      />
      <div
        style={{
          marginTop: '1.5rem',
          padding: '1.5rem',
          backgroundColor: '#F5F5F5',
          borderRadius: '8px',
        }}
      >
        <p
          style={{
            margin: '0 0 0.5rem 0',
            fontSize: '0.875rem',
            color: '#666',
          }}
        >
          {currentData.label}
        </p>
        <p
          style={{ margin: '0 0 0.5rem 0', fontSize: '2rem', fontWeight: 700 }}
        >
          {currentData.value}
        </p>
        <p
          style={{
            margin: 0,
            fontSize: '0.875rem',
            color: '#4CAF50',
            fontWeight: 600,
          }}
        >
          {currentData.change}
        </p>
      </div>
    </div>
  );
};

export const TimePeriodSelector: Story = {
  parameters: { controls: { disable: true } },
  render: () => <TimePeriodSelectorExample />,
};

// Tab Navigation Example
const TabNavigationExample = () => {
  const [tab, setTab] = useState('overview');

  return (
    <div style={{ width: '700px' }}>
      <SegmentedButtons
        options={[
          { value: 'overview', label: '개요', icon: <HomeIcon /> },
          { value: 'analytics', label: '분석', icon: <SearchIcon /> },
          { value: 'favorites', label: '즐겨찾기', icon: <StarIcon /> },
          { value: 'settings', label: '설정', icon: <UserIcon /> },
        ]}
        value={tab}
        onChange={setTab}
        fullWidth
        aria-label="탭 선택"
      />
      <div
        style={{
          marginTop: '1.5rem',
          padding: '2rem',
          backgroundColor: '#FAFAFA',
          borderRadius: '8px',
          minHeight: '200px',
        }}
      >
        {tab === 'overview' && (
          <div>
            <h3 style={{ margin: '0 0 1rem 0' }}>개요</h3>
            <p style={{ margin: 0, color: '#666' }}>
              대시보드 개요 페이지입니다.
            </p>
          </div>
        )}
        {tab === 'analytics' && (
          <div>
            <h3 style={{ margin: '0 0 1rem 0' }}>분석</h3>
            <p style={{ margin: 0, color: '#666' }}>
              상세 분석 데이터를 확인할 수 있습니다.
            </p>
          </div>
        )}
        {tab === 'favorites' && (
          <div>
            <h3 style={{ margin: '0 0 1rem 0' }}>즐겨찾기</h3>
            <p style={{ margin: 0, color: '#666' }}>
              자주 사용하는 항목을 관리합니다.
            </p>
          </div>
        )}
        {tab === 'settings' && (
          <div>
            <h3 style={{ margin: '0 0 1rem 0' }}>설정</h3>
            <p style={{ margin: 0, color: '#666' }}>
              시스템 설정을 변경할 수 있습니다.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export const TabNavigation: Story = {
  parameters: { controls: { disable: true } },
  render: () => <TabNavigationExample />,
};

// All Variants
const AllVariantsComponents = () => {
  const [value1, setValue1] = useState('option1');
  const [value2, setValue2] = useState('option2');
  const [value3, setValue3] = useState('option3');
  const [value4, setValue4] = useState('home');
  const [value5, setValue5] = useState('search');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <div>
        <h3 style={{ margin: '0 0 1rem 0', fontSize: '1rem', fontWeight: 600 }}>
          기본
        </h3>
        <SegmentedButtons
          options={[
            { value: 'option1', label: '옵션 1' },
            { value: 'option2', label: '옵션 2' },
            { value: 'option3', label: '옵션 3' },
          ]}
          value={value1}
          onChange={setValue1}
          aria-label="기본 세그먼트"
        />
      </div>

      <div>
        <h3 style={{ margin: '0 0 1rem 0', fontSize: '1rem', fontWeight: 600 }}>
          Small
        </h3>
        <SegmentedButtons
          options={[
            { value: 'option1', label: '옵션 1' },
            { value: 'option2', label: '옵션 2' },
            { value: 'option3', label: '옵션 3' },
          ]}
          value={value2}
          onChange={setValue2}
          size="sm"
          aria-label="작은 세그먼트"
        />
      </div>

      <div>
        <h3 style={{ margin: '0 0 1rem 0', fontSize: '1rem', fontWeight: 600 }}>
          Large
        </h3>
        <SegmentedButtons
          options={[
            { value: 'option1', label: '옵션 1' },
            { value: 'option2', label: '옵션 2' },
            { value: 'option3', label: '옵션 3' },
          ]}
          value={value3}
          onChange={setValue3}
          size="lg"
          aria-label="큰 세그먼트"
        />
      </div>

      <div>
        <h3 style={{ margin: '0 0 1rem 0', fontSize: '1rem', fontWeight: 600 }}>
          아이콘 포함
        </h3>
        <SegmentedButtons
          options={[
            { value: 'home', label: '홈', icon: <HomeIcon /> },
            { value: 'search', label: '검색', icon: <SearchIcon /> },
            { value: 'favorites', label: '즐겨찾기', icon: <StarIcon /> },
          ]}
          value={value4}
          onChange={setValue4}
          aria-label="아이콘 포함 세그먼트"
        />
      </div>

      <div>
        <h3 style={{ margin: '0 0 1rem 0', fontSize: '1rem', fontWeight: 600 }}>
          아이콘만
        </h3>
        <SegmentedButtons
          options={[
            { value: 'home', label: '홈', icon: <HomeIcon />, iconOnly: true },
            {
              value: 'search',
              label: '검색',
              icon: <SearchIcon />,
              iconOnly: true,
            },
            {
              value: 'favorites',
              label: '즐겨찾기',
              icon: <StarIcon />,
              iconOnly: true,
            },
            {
              value: 'profile',
              label: '프로필',
              icon: <UserIcon />,
              iconOnly: true,
            },
          ]}
          value={value5}
          onChange={setValue5}
          aria-label="아이콘만 세그먼트"
        />
      </div>

      <div style={{ width: '400px' }}>
        <h3 style={{ margin: '0 0 1rem 0', fontSize: '1rem', fontWeight: 600 }}>
          전체 너비
        </h3>
        <SegmentedButtons
          options={[
            { value: 'option1', label: '옵션 1' },
            { value: 'option2', label: '옵션 2' },
            { value: 'option3', label: '옵션 3' },
          ]}
          value={value1}
          onChange={setValue1}
          fullWidth
          aria-label="전체 너비 세그먼트"
        />
      </div>
    </div>
  );
};

export const AllVariants: Story = {
  parameters: { controls: { disable: true } },
  render: () => <AllVariantsComponents />,
};
