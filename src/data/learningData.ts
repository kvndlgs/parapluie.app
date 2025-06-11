import { LearningSection } from '@/types/learn';

export const learningSections: LearningSection[] = [
  {
    id: 'web-security',
    title: 'Basic Web Security',
    description: 'Essential knowledge for staying safe online',
    icon: 'Shield',
    color: 'bg-blue-500',
    topics: [
      {
        id: 'common-threats',
        title: 'Common Online Threats',
        description: 'Understanding phishing, malware, and social engineering attacks',
        icon: 'AlertTriangle',
        summary: 'Online threats come in many forms, but the most common ones target your personal information, money, or computer security. Understanding these threats is your first line of defense.',
        keyTakeaways: [
          'Phishing emails try to steal your login credentials or personal information',
          'Malware can damage your computer or steal your data',
          'Social engineering uses psychological manipulation to trick you',
          'Being aware of these threats significantly reduces your risk'
        ],
        quickReadContent: `
# Common Online Threats: What You Need to Know

## Phishing Attacks
Phishing is like digital fishing - criminals cast a wide net hoping to catch unsuspecting victims. They send fake emails, texts, or create fake websites that look legitimate to steal your information.

**Warning Signs:**
- Urgent language ("Act now!" or "Your account will be closed!")
- Generic greetings ("Dear Customer" instead of your name)
- Suspicious email addresses or URLs
- Requests for sensitive information via email

## Malware
Malware (malicious software) is designed to harm your computer or steal your information. It can come disguised as legitimate software, email attachments, or downloads.

**Common Types:**
- **Viruses**: Spread from file to file, damaging your system
- **Ransomware**: Locks your files and demands payment
- **Spyware**: Secretly monitors your activities
- **Trojans**: Disguised as helpful software but contain malicious code

## Social Engineering
This involves psychological manipulation to trick people into revealing information or performing actions that compromise security.

**Common Tactics:**
- Creating false urgency or fear
- Impersonating authority figures
- Offering something too good to be true
- Building false trust relationships

## Protection Strategies
1. **Stay Informed**: Knowledge is your best defense
2. **Verify Before Acting**: When in doubt, verify through official channels
3. **Use Security Software**: Keep antivirus and anti-malware updated
4. **Trust Your Instincts**: If something feels wrong, it probably is
        `,
        resources: [
          {
            id: 'cisa-phishing-guide',
            title: 'CISA Phishing Guide',
            description: 'Official government guide to recognizing and avoiding phishing attacks',
            url: 'https://www.cisa.gov/news-events/news/avoiding-social-engineering-and-phishing-attacks',
            type: 'guide',
            difficulty: 'beginner',
            readTime: 8,
            isExternal: true
          },
          {
            id: 'ftc-malware-protection',
            title: 'FTC Malware Protection Tips',
            description: 'Federal Trade Commission advice on protecting against malware',
            url: 'https://consumer.ftc.gov/articles/how-recognize-and-avoid-phishing-scams',
            type: 'article',
            difficulty: 'beginner',
            readTime: 6,
            isExternal: true
          },
          {
            id: 'nist-social-engineering',
            title: 'NIST Social Engineering Awareness',
            description: 'National Institute of Standards guide to social engineering prevention',
            url: 'https://www.nist.gov/itl/applied-cybersecurity/nice/resources/social-engineering',
            type: 'guide',
            difficulty: 'intermediate',
            readTime: 12,
            isExternal: true
          }
        ]
      },
      {
        id: 'password-security',
        title: 'Password Best Practices',
        description: 'Creating and managing strong, secure passwords',
        icon: 'Lock',
        summary: 'Strong passwords are your first line of defense against unauthorized access. Learn how to create, manage, and protect your passwords effectively.',
        keyTakeaways: [
          'Use unique passwords for each account',
          'Make passwords at least 12 characters long',
          'Use a password manager to generate and store passwords',
          'Enable two-factor authentication whenever possible'
        ],
        quickReadContent: `
# Password Security: Your Digital Keys

## Why Password Security Matters
Your passwords are like keys to your digital life. Weak passwords are like using a flimsy lock on your front door - they invite trouble.

## Creating Strong Passwords

### The 4 Pillars of Strong Passwords
1. **Length**: At least 12 characters (longer is better)
2. **Complexity**: Mix of uppercase, lowercase, numbers, and symbols
3. **Uniqueness**: Different password for each account
4. **Unpredictability**: Avoid personal information or common patterns

### Easy Methods to Create Strong Passwords

**Passphrase Method:**
- Think of a memorable sentence
- Use first letters of each word
- Add numbers and symbols
- Example: "I love walking my dog at 7am!" becomes "IlwmdBa7a!"

**Three Random Words:**
- Combine unrelated words with numbers/symbols
- Example: "Piano29Butterfly!Sandwich"

## Password Management

### Password Managers (Recommended)
Password managers are secure vaults for all your passwords:
- Generate strong passwords automatically
- Remember passwords for you
- Work across all devices
- Only need to remember one master password

**Popular Options:**
- Bitwarden (free and premium)
- 1Password (premium, user-friendly)
- Dashlane (good for beginners)

### Two-Factor Authentication (2FA)
Add a second layer of security:
- Something you know (password)
- Something you have (phone, app, or token)
- Even if password is compromised, account stays secure

## Common Mistakes to Avoid
- Using personal information (names, birthdays, addresses)
- Simple patterns (123456, password, qwerty)
- Reusing passwords across multiple accounts
- Sharing passwords via email or text
- Writing passwords on sticky notes

## When to Change Passwords
- Immediately if you suspect compromise
- After data breaches affecting your accounts
- Every 6-12 months for important accounts
- When ending shared account access
        `,
        resources: [
          {
            id: 'nist-password-guidelines',
            title: 'NIST Password Guidelines',
            description: 'Official federal guidelines for creating secure passwords',
            url: 'https://pages.nist.gov/800-63-3/sp800-63b.html',
            type: 'guide',
            difficulty: 'intermediate',
            readTime: 15,
            isExternal: true
          },
          {
            id: 'password-manager-guide',
            title: 'Consumer Reports Password Manager Guide',
            description: 'Comprehensive review and setup guide for password managers',
            url: 'https://www.consumerreports.org/digital-security/everything-you-need-to-know-about-password-managers/',
            type: 'article',
            difficulty: 'beginner',
            readTime: 10,
            isExternal: true
          },
          {
            id: 'two-factor-setup',
            title: 'Two-Factor Authentication Setup Guide',
            description: 'Step-by-step instructions for enabling 2FA on popular services',
            url: 'https://www.cisa.gov/mfa',
            type: 'guide',
            difficulty: 'beginner',
            readTime: 8,
            isExternal: true
          }
        ]
      },
      {
        id: 'safe-browsing',
        title: 'Safe Browsing Habits',
        description: 'Best practices for secure web browsing and online activities',
        icon: 'Globe',
        summary: 'Safe browsing habits protect you from malicious websites, downloads, and online scams. Small changes in how you browse can significantly improve your security.',
        keyTakeaways: [
          'Always verify website URLs before entering sensitive information',
          'Keep your browser and plugins updated',
          'Be cautious with downloads and email attachments',
          'Use secure networks and avoid public Wi-Fi for sensitive activities'
        ],
        quickReadContent: `
# Safe Browsing: Navigate the Web Securely

## Browser Security Basics

### Keep Everything Updated
- **Browser**: Use the latest version of Chrome, Firefox, Safari, or Edge
- **Plugins**: Update Flash, Java, and other browser extensions
- **Operating System**: Install security updates promptly

### Secure Connection Indicators
Look for these signs of a secure website:
- **HTTPS**: URL starts with "https://" not "http://"
- **Lock Icon**: Green or gray lock in the address bar
- **Valid Certificate**: No browser warnings about security

## Safe Downloading Practices

### What to Avoid
- Downloads from unknown or suspicious websites
- Software from pop-up ads or unsolicited emails
- Pirated software or media files
- Files with suspicious extensions (.exe, .scr, .bat from unknown sources)

### Safe Download Sources
- Official software websites
- Reputable app stores (Google Play, Apple App Store)
- Well-known download sites with good reputations
- Direct links from trusted sources

## Email and Attachment Safety

### Red Flags in Emails
- Unexpected attachments from unknown senders
- Urgent requests for personal information
- Links to unfamiliar websites
- Poor grammar or spelling in "official" emails

### Safe Email Practices
- Hover over links to see actual destination
- Verify sender identity through other means
- Don't download attachments unless expected
- Use email security features (spam filters, virus scanning)

## Network Security

### Public Wi-Fi Risks
Public networks are convenient but risky:
- Data can be intercepted by others
- Fake hotspots can steal information
- Malicious users on same network

### Safe Public Wi-Fi Use
- Avoid accessing sensitive accounts
- Use VPN for additional protection
- Turn off auto-connect to Wi-Fi networks
- Verify network name with establishment

### Home Network Security
- Change default router passwords
- Use WPA3 or WPA2 encryption
- Regularly update router firmware
- Create guest network for visitors

## Shopping and Banking Online

### Secure Shopping Practices
- Shop only on trusted, well-known sites
- Look for secure payment options
- Check return and privacy policies
- Monitor credit card statements regularly

### Banking Security
- Always log in through official bank website
- Never access accounts from public computers
- Log out completely when finished
- Set up account alerts for transactions

## Social Media Safety

### Privacy Settings
- Review and adjust privacy settings regularly
- Limit who can see your posts and information
- Be cautious about location sharing
- Think before posting personal details

### Avoiding Scams
- Be skeptical of "too good to be true" offers
- Don't click suspicious links from friends (they might be hacked)
- Verify friend requests from people you know
- Report and block suspicious accounts
        `,
        resources: [
          {
            id: 'fbi-safe-browsing',
            title: 'FBI Internet Safety Tips',
            description: 'Federal Bureau of Investigation guide to safe internet browsing',
            url: 'https://www.fbi.gov/how-we-can-help-you/safety-resources/scams-and-safety/common-scams-and-crimes/internet-fraud',
            type: 'guide',
            difficulty: 'beginner',
            readTime: 7,
            isExternal: true
          },
          {
            id: 'browser-security-settings',
            title: 'Browser Security Configuration Guide',
            description: 'How to configure your browser for maximum security and privacy',
            url: 'https://www.us-cert.gov/ncas/tips/ST05-012',
            type: 'guide',
            difficulty: 'intermediate',
            readTime: 12,
            isExternal: true
          },
          {
            id: 'safe-wifi-practices',
            title: 'Public Wi-Fi Safety Guide',
            description: 'Best practices for using public wireless networks securely',
            url: 'https://www.cisa.gov/news-events/news/using-caution-public-wi-fi-networks',
            type: 'article',
            difficulty: 'beginner',
            readTime: 5,
            isExternal: true
          }
        ]
      }
    ]
  },
  {
    id: 'social-engineering',
    title: 'Social Engineering Prevention',
    description: 'Recognize and defend against manipulation tactics',
    icon: 'Users',
    color: 'bg-red-500',
    topics: [
      {
        id: 'red-flags',
        title: 'Red Flags to Watch For',
        description: 'Warning signs of social engineering attempts',
        icon: 'Flag',
        summary: 'Social engineers use psychological tricks to manipulate people. Learning to recognize these red flags can protect you from becoming a victim.',
        keyTakeaways: [
          'Urgency and pressure tactics are major warning signs',
          'Requests for sensitive information should always be verified',
          'Trust your instincts - if something feels wrong, it probably is',
          'Legitimate organizations rarely ask for sensitive info via phone or email'
        ],
        quickReadContent: `
# Red Flags: Spotting Social Engineering Attempts

## Understanding Social Engineering
Social engineering exploits human psychology rather than technical vulnerabilities. Attackers manipulate emotions and trust to trick people into revealing information or taking harmful actions.

## Major Red Flags

### Urgency and Pressure
**What to Watch For:**
- "You must act immediately or your account will be closed"
- "This offer expires in the next 10 minutes"
- "If you don't respond now, you'll lose everything"
- "Don't tell anyone about this"

**Why It Works:** Pressure prevents careful thinking and verification.

### Authority Impersonation
**Common Scenarios:**
- Fake calls from "bank security departments"
- Emails claiming to be from IT support
- Messages from "government agencies"
- Impersonation of company executives

**Red Flags:**
- Requests for passwords or personal information
- Unusual communication methods (personal email for work matters)
- Poor grammar or spelling in "official" communications
- Threats of legal action or account closure

### Too Good to Be True
**Examples:**
- "You've won a lottery you never entered"
- "Make $5000 working from home with no experience"
- "Free vacation - just pay small processing fee"
- "Investment opportunity with guaranteed returns"

### Information Fishing
**Tactics:**
- Asking for "verification" of information they should already have
- Requesting sensitive details via unsecured channels
- Building rapport before asking for favors
- Claiming to need information for "security purposes"

## Emotional Manipulation Tactics

### Fear-Based Approaches
- "Your computer is infected with viruses"
- "Suspicious activity detected on your account"
- "Legal action will be taken if you don't respond"
- "Your identity has been stolen"

### Sympathy and Trust Building
- Sharing fake personal stories
- Claiming to be in distress or danger
- Building relationships over time before making requests
- Using information from social media to seem legitimate

### Greed and Opportunity
- Exclusive investment opportunities
- "Secret" money-making methods
- Limited-time offers with huge discounts
- Inheritance or lottery scams

## Verification Strategies

### Always Verify Independently
1. **Hang up and call back** using official numbers
2. **Visit official websites** directly (don't click email links)
3. **Contact the organization** through known channels
4. **Ask for credentials** and verify them independently

### Questions to Ask Yourself
- Why is this person contacting me?
- How did they get my information?
- What are they really asking for?
- Does this request make sense?
- Am I being pressured to act quickly?

## Common Scenarios and Responses

### Phone Calls
**Scenario:** "This is John from your bank's fraud department. We've detected suspicious activity and need to verify your account information."

**Response:** "I'll call the bank directly using the number on my card to verify this."

### Emails
**Scenario:** Urgent email claiming your account will be suspended unless you click a link and update your information.

**Response:** Log into your account directly through the official website to check for any real issues.

### In-Person
**Scenario:** Someone claiming to be from IT asks for your password to "fix" your computer.

**Response:** "I'll need to verify this with my supervisor/IT department first."

## Building Healthy Skepticism

### It's Okay to Be Suspicious
- Legitimate organizations understand security concerns
- Real emergencies rarely require immediate disclosure of sensitive information
- Taking time to verify is always acceptable
- Your security is more important than being polite

### Trust But Verify
- Even if someone seems legitimate, verify their identity
- Use official channels for all sensitive communications
- Keep personal information private until identity is confirmed
- When in doubt, seek a second opinion
        `,
        resources: [
          {
            id: 'social-engineering-awareness',
            title: 'SANS Social Engineering Awareness',
            description: 'Comprehensive guide to recognizing social engineering tactics',
            url: 'https://www.sans.org/white-papers/36972/',
            type: 'guide',
            difficulty: 'intermediate',
            readTime: 20,
            isExternal: true
          },
          {
            id: 'ftc-imposter-scams',
            title: 'FTC Guide to Imposter Scams',
            description: 'Federal Trade Commission resource on identifying fake authority figures',
            url: 'https://consumer.ftc.gov/articles/how-spot-avoid-and-report-imposter-scams',
            type: 'article',
            difficulty: 'beginner',
            readTime: 8,
            isExternal: true
          },
          {
            id: 'psychology-of-scams',
            title: 'Psychology Behind Scams',
            description: 'Understanding why people fall for scams and how to protect yourself',
            url: 'https://www.aarp.org/money/scams-fraud/info-2019/psychology-of-fraud.html',
            type: 'article',
            difficulty: 'beginner',
            readTime: 12,
            isExternal: true
          }
        ]
      },
      {
        id: 'manipulation-tactics',
        title: 'Common Manipulation Tactics',
        description: 'Understanding psychological tricks used by social engineers',
        icon: 'Brain',
        summary: 'Social engineers use well-studied psychological principles to manipulate their targets. Understanding these tactics helps you recognize and resist them.',
        keyTakeaways: [
          'Reciprocity makes people feel obligated to return favors',
          'Authority figures are trusted even when they shouldn\'t be',
          'Scarcity creates artificial urgency and poor decision-making',
          'Social proof exploits our tendency to follow others'
        ],
        quickReadContent: `
# Manipulation Tactics: The Psychology of Social Engineering

## The Science Behind Manipulation
Social engineers exploit fundamental human psychology. These tactics work because they trigger automatic responses that bypass our critical thinking.

## Core Psychological Principles

### 1. Reciprocity
**How It Works:** People feel obligated to return favors, even small ones.

**In Social Engineering:**
- Offering "free" information or services before asking for something
- Claiming to help you avoid a problem they created
- Providing small gifts or compliments before making requests

**Example:** "I'm calling to help you avoid identity theft. First, let me verify your account by confirming your Social Security number."

**Defense:** Remember that unsolicited "help" often comes with strings attached.

### 2. Authority
**How It Works:** People tend to obey authority figures without question.

**In Social Engineering:**
- Impersonating police, government officials, or company executives
- Using official-sounding titles and jargon
- Creating fake credentials or uniforms
- Referencing real authority figures

**Example:** "This is Agent Smith from the IRS. You owe back taxes and must pay immediately to avoid arrest."

**Defense:** Always verify authority independently through official channels.

### 3. Social Proof
**How It Works:** People follow what others are doing, especially in uncertain situations.

**In Social Engineering:**
- "Everyone in your neighborhood is signing up"
- "Your friends have already provided this information"
- Fake testimonials and reviews
- Creating artificial popularity

**Example:** "All your neighbors have already updated their security information. You're the last one on our list."

**Defense:** Make decisions based on your own research, not what others allegedly do.

### 4. Scarcity
**How It Works:** Limited availability increases perceived value and urgency.

**In Social Engineering:**
- "Limited time offers" that pressure quick decisions
- "Only a few spots left" in fake programs
- "This opportunity won't come again"
- Creating artificial deadlines

**Example:** "This security update is only available today. If you don't install it now, your computer will be vulnerable."

**Defense:** Take time to research and verify, regardless of claimed urgency.

### 5. Liking
**How It Works:** People are more likely to comply with requests from people they like.

**In Social Engineering:**
- Finding common interests or backgrounds
- Excessive compliments and flattery
- Mirroring your communication style
- Building fake relationships over time

**Example:** Building a relationship on social media over months before asking for money or information.

**Defense:** Separate personal feelings from security decisions.

### 6. Commitment and Consistency
**How It Works:** People want to appear consistent with their previous statements and actions.

**In Social Engineering:**
- Getting small commitments that lead to larger ones
- Referencing past actions or statements
- Making you feel obligated to follow through
- Using your own words against you

**Example:** "You said security was important to you, so you'll want to install this protection software."

**Defense:** Each request should be evaluated independently.

## Advanced Manipulation Techniques

### Preloading
Setting up false information or context before making the real request.

**Example:** Sending fake news about security breaches before calling to "help" secure your account.

### Pretexting
Creating elaborate fictional scenarios to justify information requests.

**Example:** Posing as a researcher conducting a "security survey" to gather personal information.

### Baiting
Offering something desirable to trigger the desired action.

**Example:** "Free security scan" that actually installs malware.

### Quid Pro Quo
Offering a service or benefit in exchange for information or access.

**Example:** "I'll help you with your computer problem if you give me remote access."

## Emotional Manipulation

### Fear
- Threats of legal action, account closure, or security breaches
- Creating panic about immediate dangers
- Exploiting current events or news stories

### Greed
- Promises of easy money or exclusive opportunities
- "Investment" opportunities with guaranteed returns
- Lottery or inheritance scams

### Sympathy
- Fake emergencies or sob stories
- Impersonating charities or people in need
- Exploiting natural disasters or tragedies

### Curiosity
- Mysterious messages that require action to learn more
- "Confidential" information that seems important
- Puzzles or challenges that require personal information

## Building Resistance

### Slow Down
- Take time to think before responding
- Sleep on important decisions
- Consult with trusted friends or family

### Question Everything
- Why is this person contacting me?
- What do they really want?
- How can I verify this independently?
- What happens if I don't respond immediately?

### Trust Your Instincts
- If something feels wrong, it probably is
- Discomfort is often your brain detecting manipulation
- It's better to be overly cautious than sorry

### Establish Verification Procedures
- Always verify through independent channels
- Use official contact information, not what's provided
- Ask for credentials and verify them
- Consult with others before making decisions
        `,
        resources: [
          {
            id: 'cialdini-influence',
            title: 'Principles of Persuasion in Security',
            description: 'How Cialdini\'s influence principles are used in social engineering attacks',
            url: 'https://www.social-engineer.org/framework/psychological-principles/',
            type: 'article',
            difficulty: 'intermediate',
            readTime: 15,
            isExternal: true
          },
          {
            id: 'manipulation-defense',
            title: 'Defending Against Manipulation',
            description: 'Practical strategies for resisting psychological manipulation tactics',
            url: 'https://www.cisa.gov/news-events/news/avoiding-social-engineering-and-phishing-attacks',
            type: 'guide',
            difficulty: 'beginner',
            readTime: 10,
            isExternal: true
          },
          {
            id: 'cognitive-biases-security',
            title: 'Cognitive Biases in Cybersecurity',
            description: 'How mental shortcuts can be exploited by attackers',
            url: 'https://www.sans.org/white-papers/37749/',
            type: 'article',
            difficulty: 'advanced',
            readTime: 25,
            isExternal: true
          }
        ]
      },
      {
        id: 'real-world-scenarios',
        title: 'Real-World Example Scenarios',
        description: 'Common social engineering attacks and how to respond',
        icon: 'FileText',
        summary: 'Learning from real-world examples helps you recognize similar attacks. These scenarios show common tactics and appropriate responses.',
        keyTakeaways: [
          'Attackers often combine multiple tactics in single attempts',
          'Verification is always the best response to unexpected requests',
          'Legitimate organizations will understand your need to verify',
          'When in doubt, seek help from trusted sources'
        ],
        quickReadContent: `
# Real-World Social Engineering Scenarios

## Scenario 1: The Fake IT Support Call

### The Attack
**Phone rings:** "Hello, this is Mike from your company's IT department. We've detected a virus on your computer that's spreading to other systems. I need you to give me remote access so I can fix it immediately."

### Red Flags
- Unsolicited call about computer problems
- Urgency and fear tactics
- Request for remote access
- No verification of identity

### Proper Response
"I'll need to verify this with IT through our normal channels. What's your employee ID and which department are you calling from? I'll call the IT help desk directly to confirm."

### What Really Happened
This is a common scam where criminals gain remote access to steal data or install malware. Real IT departments have established procedures and won't call unexpectedly demanding immediate access.

## Scenario 2: The Bank Security Alert

### The Attack
**Email received:** "URGENT: Suspicious activity detected on your account. Click here immediately to verify your identity and prevent account closure. You have 24 hours to respond."

### Red Flags
- Urgent language and threats
- Generic greeting ("Dear Customer")
- Suspicious email address
- Request to click links for sensitive actions

### Proper Response
1. Don't click any links in the email
2. Log into your bank account directly through their official website
3. Call your bank using the number on your card
4. Forward the suspicious email to your bank's fraud department

### What Really Happened
Phishing email designed to steal login credentials. The link leads to a fake website that captures your username and password.

## Scenario 3: The Charity Scam

### The Attack
**Phone call:** "Hi, I'm calling from the Children's Cancer Foundation. We're raising money for kids with cancer, and your neighbor Mrs. Johnson said you're always generous with charitable causes. Can I put you down for a $100 donation?"

### Red Flags
- Unsolicited call requesting money
- Using neighbor's name to build trust
- Pressure for immediate commitment
- No verification of charity legitimacy

### Proper Response
"I appreciate the cause, but I need to research charities before donating. Can you send me information in writing? What's your charity's registration number?"

### What Really Happened
Fake charity scam using social engineering. The scammer researched the neighborhood and used a neighbor's name to build credibility.

## Scenario 4: The Romance Scam

### The Attack
**Online dating progression:**
1. Attractive profile contacts you
2. Quickly expresses strong feelings
3. Claims to be traveling or military overseas
4. Eventually asks for money for "emergency"

### Red Flags
- Too good to be true profile
- Rapid emotional escalation
- Avoids phone/video calls
- Always has excuses for not meeting
- Eventually asks for money

### Proper Response
- Be skeptical of online relationships that progress quickly
- Insist on video calls before developing feelings
- Never send money to someone you haven't met
- Research their photos (reverse image search)

### What Really Happened
Professional scammer using stolen photos and emotional manipulation to extract money from lonely victims.

## Scenario 5: The Tech Support Pop-up

### The Attack
**Computer screen:** Sudden pop-up warning: "Your computer is infected! Call 1-800-XXX-XXXX immediately. Do not shut down your computer or you will lose all your data!"

### Red Flags
- Unexpected pop-up warnings
- Urgent language and threats
- Phone number to call for "help"
- Claims about data loss

### Proper Response
1. Close the pop-up (don't call the number)
2. Run your legitimate antivirus software
3. If concerned, contact a trusted tech support service
4. Never give remote access to unknown callers

### What Really Happened
Fake tech support scam. The pop-up is designed to scare you into calling, where scammers will charge for unnecessary "fixes" or steal your information.

## Scenario 6: The CEO Fraud

### The Attack
**Email to employee:** "This is urgent and confidential. I need you to wire $50,000 to this account for a secret acquisition. Don't discuss this with anyone. I'm in meetings all day, so handle this immediately."

### Red Flags
- Unusual request from high-level executive
- Urgency and secrecy demands
- Request for money transfer
- Claims of being unavailable for verification

### Proper Response
"I'll need to verify this through our normal approval process. I'll call your office to confirm this request."

### What Really Happened
Business Email Compromise (BEC) scam targeting employees with authority to transfer money. Scammers research company hierarchies and communication styles.

## Scenario 7: The Social Media Friend Request

### The Attack
**Facebook:** Friend request from someone claiming to be a friend of a friend, with mutual connections. After accepting, they gradually build a relationship and eventually ask for personal information or money.

### Red Flags
- Vague connection to your network
- Limited or suspicious profile history
- Gradual requests for personal information
- Eventually asks for money or sensitive data

### Proper Response
- Only accept friend requests from people you actually know
- Verify identity through other means if unsure
- Be cautious about sharing personal information
- Report suspicious profiles

### What Really Happened
Social media reconnaissance and long-term relationship building for eventual exploitation.

## General Response Strategies

### The STOP Method
- **S**top what you're doing
- **T**hink about what's being asked
- **O**btain verification independently
- **P**roceed only after confirmation

### Verification Checklist
1. Is this request normal for this person/organization?
2. Can I verify this through official channels?
3. Am I being pressured to act quickly?
4. What happens if I take time to verify?
5. Who else can I consult about this?

### When to Seek Help
- You're unsure about a request's legitimacy
- You feel pressured or confused
- The situation involves money or sensitive information
- Your instincts tell you something is wrong

Remember: Legitimate organizations and people will understand your need to verify. Anyone who gets angry or more insistent when you want to verify is likely a scammer.
        `,
        resources: [
          {
            id: 'real-scam-examples',
            title: 'FTC Real Scam Examples',
            description: 'Federal Trade Commission database of actual scam reports and examples',
            url: 'https://consumer.ftc.gov/articles/how-spot-avoid-and-report-scams',
            type: 'article',
            difficulty: 'beginner',
            readTime: 10,
            isExternal: true
          },
          {
            id: 'business-email-compromise',
            title: 'FBI BEC Awareness Guide',
            description: 'FBI guide to Business Email Compromise scams and prevention',
            url: 'https://www.fbi.gov/how-we-can-help-you/safety-resources/scams-and-safety/common-scams-and-crimes/business-email-compromise',
            type: 'guide',
            difficulty: 'intermediate',
            readTime: 12,
            isExternal: true
          },
          {
            id: 'romance-scam-prevention',
            title: 'Romance Scam Prevention Guide',
            description: 'Comprehensive guide to recognizing and avoiding online romance scams',
            url: 'https://www.ftc.gov/news-events/data-visualizations/data-spotlight/2021/02/romance-scammers-favorite-lies-exposed',
            type: 'article',
            difficulty: 'beginner',
            readTime: 8,
            isExternal: true
          }
        ]
      },
      {
        id: 'response-strategies',
        title: 'Response Strategies',
        description: 'How to respond when you encounter social engineering attempts',
        icon: 'Shield',
        summary: 'Knowing how to respond to social engineering attempts is crucial. The right response can protect you and help others avoid similar attacks.',
        keyTakeaways: [
          'Always verify suspicious requests through independent channels',
          'Document and report social engineering attempts',
          'Don\'t feel bad about being suspicious - it\'s necessary for security',
          'Help others by sharing your experiences and knowledge'
        ],
        quickReadContent: `
# Response Strategies: What to Do When Targeted

## Immediate Response Protocol

### Step 1: STOP and Assess
**Don't React Immediately**
- Take a deep breath
- Don't let urgency cloud your judgment
- Remember that legitimate emergencies rarely require immediate disclosure of sensitive information

**Ask Yourself:**
- Why is this person contacting me?
- What exactly are they asking for?
- Does this request make sense?
- Am I being pressured to act quickly?

### Step 2: Verify Independently
**Never Use Contact Information Provided by the Requester**
- Use official phone numbers from your records
- Visit official websites directly (don't click email links)
- Contact the organization through established channels
- Ask for the requester's credentials and verify them independently

**Verification Methods:**
- Call the organization's main number and ask to be transferred
- Look up contact information on official websites
- Check with colleagues or supervisors if work-related
- Consult with family members for personal matters

### Step 3: Document Everything
**Keep Records:**
- Date and time of contact
- Method of contact (phone, email, in-person)
- What was requested
- Any identifying information provided
- Your response and actions taken

**Why Documentation Matters:**
- Helps with reporting to authorities
- Provides evidence if needed later
- Helps identify patterns in attacks
- Assists others who might be targeted

## Specific Response Strategies

### Phone Calls
**If You Answer:**
- "I'll need to verify this through official channels"
- "Let me call you back at your organization's main number"
- "I'll need to check with [supervisor/spouse/etc.] first"
- "Can you send this request in writing?"

**If You're Unsure:**
- Hang up and call the organization directly
- Don't worry about being rude - your security matters more
- Trust your instincts if something feels wrong

### Emails
**Don't Click Links or Download Attachments**
- Forward suspicious emails to your IT department or the organization being impersonated
- Delete the email after reporting
- If you accidentally clicked a link, run antivirus software and change relevant passwords

**Verification Process:**
- Log into accounts directly through official websites
- Contact the organization through known channels
- Check official social media accounts for security alerts

### In-Person Encounters
**Workplace Scenarios:**
- Ask for identification and verify it with security
- Check with supervisors before providing access or information
- Follow established security protocols
- Don't let politeness override security procedures

**Public Spaces:**
- Be wary of strangers asking personal questions
- Don't provide information to unsolicited surveyors
- Be cautious of people watching you enter passwords or PINs

### Online Interactions
**Social Media:**
- Be skeptical of new friend requests from unknown people
- Don't share personal information publicly
- Report suspicious profiles and messages
- Verify identity through other means before trusting

**Dating Sites:**
- Be cautious of profiles that seem too good to be true
- Insist on video calls before developing emotional connections
- Never send money to someone you haven't met in person
- Research photos using reverse image search

## After an Encounter

### If You Didn't Fall for It
**Report the Attempt:**
- Contact the organization being impersonated
- Report to relevant authorities (FTC, FBI IC3, local police)
- Warn friends and family about the specific tactic used
- Share your experience to help others

**Learn from It:**
- Analyze what red flags you noticed
- Consider what made you suspicious
- Share the experience with others
- Update your security practices if needed

### If You Think You Were Compromised
**Immediate Actions:**
1. **Change passwords** for any accounts that might be affected
2. **Contact your bank** if financial information was shared
3. **Monitor accounts** closely for unusual activity
4. **Run security scans** on your devices
5. **Enable two-factor authentication** where possible

**Ongoing Monitoring:**
- Check credit reports regularly
- Set up account alerts for unusual activity
- Consider identity monitoring services
- Keep detailed records of any suspicious activity

### If You Lost Money
**Financial Recovery Steps:**
1. **Contact your bank immediately** to report fraud
2. **File a police report** for documentation
3. **Report to the FTC** at ReportFraud.ftc.gov
4. **Contact credit bureaus** to place fraud alerts
5. **Document all communications** with financial institutions

## Building Long-Term Resilience

### Develop Healthy Skepticism
**It's Okay to Be Suspicious:**
- Legitimate organizations understand security concerns
- Real emergencies rarely require immediate sensitive information
- Taking time to verify is always acceptable
- Your security is more important than being polite

### Create Verification Habits
**Standard Procedures:**
- Always verify unexpected requests independently
- Use official contact information from your records
- Consult with trusted advisors for important decisions
- Take time to think before responding to urgent requests

### Stay Informed
**Keep Learning:**
- Follow reputable cybersecurity news sources
- Attend security awareness training
- Share experiences with friends and family
- Learn about new scam tactics as they emerge

### Help Others
**Share Your Knowledge:**
- Warn friends and family about new scams
- Report suspicious activity to help protect others
- Share your experiences (without embarrassment)
- Support others who may have been victimized

## Communication Scripts

### Polite but Firm Responses
- "I have a policy of verifying all unexpected requests independently."
- "I'll need to check with [relevant authority] before proceeding."
- "Can you provide this request through official channels?"
- "I'm not comfortable sharing that information over the phone."

### When Pressured
- "If this is legitimate, you'll understand my need to verify."
- "I'm not making any decisions today. I'll get back to you."
- "My security policies don't allow me to respond to urgent requests immediately."
- "I'll need to consult with others before proceeding."

### For Workplace Situations
- "Our security policy requires me to verify this through proper channels."
- "I'll need approval from my supervisor for this type of request."
- "Let me check with IT/Security before providing access."
- "I'll need to see proper authorization for this request."

Remember: The goal isn't to be paranoid, but to be appropriately cautious. Developing good response habits protects you and helps create a more secure environment for everyone.
        `,
        resources: [
          {
            id: 'incident-response-guide',
            title: 'CISA Incident Response Guide',
            description: 'Official guide for responding to cybersecurity incidents and social engineering',
            url: 'https://www.cisa.gov/news-events/news/what-do-if-you-think-youve-been-hacked',
            type: 'guide',
            difficulty: 'intermediate',
            readTime: 15,
            isExternal: true
          },
          {
            id: 'fraud-reporting',
            title: 'FTC Fraud Reporting Center',
            description: 'How and where to report fraud, scams, and identity theft',
            url: 'https://reportfraud.ftc.gov/',
            type: 'tool',
            difficulty: 'beginner',
            readTime: 5,
            isExternal: true
          },
          {
            id: 'recovery-checklist',
            title: 'Identity Theft Recovery Checklist',
            description: 'Step-by-step guide for recovering from identity theft and fraud',
            url: 'https://www.identitytheft.gov/Steps',
            type: 'guide',
            difficulty: 'beginner',
            readTime: 10,
            isExternal: true
          }
        ]
      }
    ]
  }
];