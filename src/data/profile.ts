// Toàn bộ nội dung trang chủ nằm ở đây. Sửa file này là site đổi theo.

export const profile = {
  name: 'Nguyễn Bá Ngũ Luân',
  shortName: 'Luân',
  initials: 'NL',
  role: 'System Administrator',
  location: 'Ho Chi Minh City, Vietnam',
  email: 'vn77.nguyenluan@gmail.com',
  github: '', // ví dụ: 'https://github.com/your-name'
  linkedin: '', // ví dụ: 'https://www.linkedin.com/in/your-name'
  headline: 'I keep servers fast, secure and online.',
  intro:
    'System administrator with 5+ years on Linux and Windows infrastructure. I run virtualization, hosting stacks, network security and backups, and write the scripts and tools that keep them healthy.',
  years: '5+',
};

// Dòng hiển thị trong khung terminal ở hero
export const terminal = [
  { service: 'virtuozzo', state: 'running' },
  { service: 'firewall', state: 'active' },
  { service: 'backup-nightly', state: 'verified' },
  { service: 'monitoring', state: 'watching' },
  { service: 'web-stack', state: 'healthy' },
];

// Nhóm năng lực chính. size: 'wide' = rộng 2 cột, 'full' = hết chiều ngang.
export const expertise = [
  {
    title: 'Virtualization',
    size: 'wide',
    text: 'Run Virtuozzo/OpenVZ container nodes end to end: provisioning, resource limits, migrations and node health. Comfortable on Linux and Windows servers and Google Cloud.',
    tools: ['Virtuozzo', 'OpenVZ', 'Linux', 'Windows Server', 'GCP'],
  },
  {
    title: 'Network security',
    text: 'Harden servers, manage firewall rules and access control, mitigate DDoS and encrypt data at rest and in transit.',
    tools: ['Firewall', 'DDoS mitigation', 'SSL/TLS', 'Encryption'],
  },
  {
    title: 'Incident response',
    text: 'Trace problems through system, web and mail logs to the real cause. Find and remove malware on hosted sites, then close the hole it came through.',
    tools: ['Log analysis', 'Malware cleanup', 'Root cause'],
  },
  {
    title: 'Hosting & web stacks',
    text: 'Operate shared and dedicated hosting with control panels, web servers, databases, mail and DNS.',
    tools: ['WHM/cPanel', 'Plesk', 'DirectAdmin', 'Apache', 'Nginx', 'MySQL', 'Mail', 'DNS'],
  },
  {
    title: 'Backup & monitoring',
    text: 'Write custom backup scripts with retention, verification and restore tests, and build internal monitoring that alerts before users notice.',
    tools: ['Backup scripts', 'Restore tests', 'Monitoring', 'Alerting'],
  },
  {
    title: 'Automation & code',
    size: 'full',
    text: 'Automate repetitive operations with scripts and workflows, and build backend services, internal tools and web products when the job calls for code.',
    tools: ['Bash', 'PowerShell', 'Node.js', 'PHP', 'Laravel', 'WordPress', 'JavaScript', 'SQL', 'APIs'],
  },
];

// Quy trình xử lý sự cố – là một chuỗi bước thật nên đánh số
export const approach = [
  { title: 'Detect', text: 'Monitoring and alerts surface the problem before users report it.' },
  { title: 'Investigate', text: 'Read the logs, reproduce the symptom, narrow down the cause.' },
  { title: 'Fix', text: 'Apply the smallest safe change, verify the service and data.' },
  { title: 'Prevent', text: 'Script it, monitor it, or harden it so it does not come back.' },
];
