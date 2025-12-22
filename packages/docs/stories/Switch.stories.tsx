import type { Meta, StoryObj } from '@storybook/react'
import { Switch } from '@designsystem/core'
import { useState } from 'react'

const meta = {
  title: 'Components/Switch',
  component: Switch,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: '레이블 텍스트',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Switch 크기',
    },
    checked: {
      control: 'boolean',
      description: '체크 상태',
    },
    error: {
      control: 'boolean',
      description: '에러 상태',
    },
    errorMessage: {
      control: 'text',
      description: '에러 메시지',
    },
    helperText: {
      control: 'text',
      description: '도움말 텍스트',
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
} satisfies Meta<typeof Switch>

export default meta
type Story = StoryObj<typeof meta>

// 기본
export const Default: Story = {
  args: {
    label: '알림 허용',
  },
}

// Sizes
export const Sizes: Story = {
  args: { label: '' },
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      <Switch label="Small" size="sm" />
      <Switch label="Medium (기본)" size="md" />
      <Switch label="Large" size="lg" />
    </div>
  ),
}

// States
export const States: Story = {
  args: { label: '' },
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      <Switch label="Off (기본)" />
      <Switch label="On" checked onChange={() => {}} />
      <Switch label="Disabled Off" disabled />
      <Switch label="Disabled On" disabled checked onChange={() => {}} />
    </div>
  ),
}

// Error State
export const ErrorState: Story = {
  args: { label: '' },
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      <Switch label="필수 동의" error errorMessage="필수 항목입니다" />
      <Switch
        label="개인정보 수집 동의"
        error
        errorMessage="동의가 필요합니다"
        required
      />
    </div>
  ),
}

// Helper Text
export const HelperText: Story = {
  args: { label: '' },
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      <Switch label="이메일 알림" helperText="새로운 메시지가 도착하면 알려드립니다" />
      <Switch
        label="푸시 알림"
        helperText="앱을 사용하지 않을 때도 알림을 받을 수 있습니다"
      />
    </div>
  ),
}

// Required
export const Required: Story = {
  args: {
    label: '이용약관 동의',
    required: true,
  },
}

// Disabled
export const Disabled: Story = {
  args: {
    label: '비활성화된 스위치',
    disabled: true,
  },
}

// Controlled Component
const ControlledExample = () => {
  const [checked, setChecked] = useState(false)

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Switch
        label="다크모드"
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
      />
      <p style={{ fontSize: '0.875rem', color: '#666' }}>
        상태: {checked ? 'On 🌙' : 'Off ☀️'}
      </p>
    </div>
  )
}

export const Controlled: Story = {
  args: { label: '' },
  parameters: { controls: { disable: true } },
  render: () => <ControlledExample />,
}

// Settings Example
const SettingsExampleComponent = () => {
  const [settings, setSettings] = useState({
    notifications: true,
    emailAlerts: false,
    darkMode: false,
    autoSave: true,
  })

  return (
    <div style={{ width: '400px', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      <h3 style={{ margin: 0, fontSize: '1.125rem', fontWeight: 600 }}>설정</h3>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          padding: '1rem',
          backgroundColor: '#F5F5F5',
          borderRadius: '8px',
        }}
      >
        <Switch
          label="알림"
          checked={settings.notifications}
          onChange={(e) => setSettings({ ...settings, notifications: e.target.checked })}
          helperText="새로운 활동에 대한 알림을 받습니다"
        />

        <Switch
          label="이메일 알림"
          checked={settings.emailAlerts}
          onChange={(e) => setSettings({ ...settings, emailAlerts: e.target.checked })}
          helperText="중요한 업데이트를 이메일로 받습니다"
        />

        <Switch
          label="다크모드"
          checked={settings.darkMode}
          onChange={(e) => setSettings({ ...settings, darkMode: e.target.checked })}
          helperText="어두운 테마로 전환합니다"
        />

        <Switch
          label="자동 저장"
          checked={settings.autoSave}
          onChange={(e) => setSettings({ ...settings, autoSave: e.target.checked })}
          helperText="변경사항을 자동으로 저장합니다"
        />
      </div>

      <div
        style={{
          padding: '1rem',
          backgroundColor: '#E3F2FD',
          borderRadius: '8px',
          fontSize: '0.875rem',
        }}
      >
        <p style={{ margin: 0, fontWeight: 600, marginBottom: '0.5rem' }}>현재 설정:</p>
        <p style={{ margin: 0 }}>• 알림: {settings.notifications ? 'On' : 'Off'}</p>
        <p style={{ margin: 0 }}>• 이메일 알림: {settings.emailAlerts ? 'On' : 'Off'}</p>
        <p style={{ margin: 0 }}>• 다크모드: {settings.darkMode ? 'On' : 'Off'}</p>
        <p style={{ margin: 0 }}>• 자동 저장: {settings.autoSave ? 'On' : 'Off'}</p>
      </div>
    </div>
  )
}

export const SettingsExample: Story = {
  args: { label: '' },
  parameters: { controls: { disable: true } },
  render: () => <SettingsExampleComponent />,
}

// Form Example
const FormExampleComponent = () => {
  const [formData, setFormData] = useState({
    terms: false,
    privacy: false,
    marketing: false,
  })

  const [errors, setErrors] = useState({
    terms: false,
    privacy: false,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const newErrors = {
      terms: !formData.terms,
      privacy: !formData.privacy,
    }

    setErrors(newErrors)

    if (!newErrors.terms && !newErrors.privacy) {
      alert('가입 완료!')
    }
  }

  return (
    <form onSubmit={handleSubmit} style={{ width: '400px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <h3 style={{ margin: 0, fontSize: '1.125rem', fontWeight: 600 }}>약관 동의</h3>

        <Switch
          label="[필수] 이용약관 동의"
          checked={formData.terms}
          onChange={(e) => setFormData({ ...formData, terms: e.target.checked })}
          required
          error={errors.terms}
          errorMessage={errors.terms ? '필수 항목입니다' : undefined}
          helperText="서비스 이용을 위해 필수적으로 동의해야 합니다"
        />

        <Switch
          label="[필수] 개인정보 처리방침 동의"
          checked={formData.privacy}
          onChange={(e) => setFormData({ ...formData, privacy: e.target.checked })}
          required
          error={errors.privacy}
          errorMessage={errors.privacy ? '필수 항목입니다' : undefined}
          helperText="개인정보 보호를 위한 필수 동의 사항입니다"
        />

        <Switch
          label="[선택] 마케팅 정보 수신 동의"
          checked={formData.marketing}
          onChange={(e) => setFormData({ ...formData, marketing: e.target.checked })}
          helperText="이메일, SMS로 혜택 정보를 받을 수 있습니다"
        />

        <button
          type="submit"
          style={{
            padding: '12px',
            backgroundColor: '#1E88E5',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            fontSize: '1rem',
            fontWeight: 600,
            cursor: 'pointer',
          }}
        >
          가입하기
        </button>
      </div>
    </form>
  )
}

export const FormExample: Story = {
  args: { label: '' },
  parameters: { controls: { disable: true } },
  render: () => <FormExampleComponent />,
}

// All Combinations
export const AllCombinations: Story = {
  args: { label: '' },
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', width: '400px' }}>
      <div>
        <h3 style={{ marginBottom: '1rem' }}>기본</h3>
        <Switch label="알림 허용" />
      </div>

      <div>
        <h3 style={{ marginBottom: '1rem' }}>필수 입력</h3>
        <Switch label="이용약관 동의" required />
      </div>

      <div>
        <h3 style={{ marginBottom: '1rem' }}>도움말 포함</h3>
        <Switch label="푸시 알림" helperText="새로운 메시지가 도착하면 알려드립니다" />
      </div>

      <div>
        <h3 style={{ marginBottom: '1rem' }}>에러 상태</h3>
        <Switch label="필수 동의" error errorMessage="필수 항목입니다" />
      </div>

      <div>
        <h3 style={{ marginBottom: '1rem' }}>비활성화</h3>
        <Switch label="사용 불가" disabled />
      </div>

      <div>
        <h3 style={{ marginBottom: '1rem' }}>체크된 상태</h3>
        <Switch label="활성화됨" checked onChange={() => {}} />
      </div>
    </div>
  ),
}
