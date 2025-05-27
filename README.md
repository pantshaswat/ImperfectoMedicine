# ImperfectoMedicine - Medical Notes Platform

A comprehensive medical notes and blog platform built for MBBS students, providing structured access to medical education content. This platform is built using Next.js and Sanity CMS, offering a modern, responsive, and user-friendly interface for accessing medical notes.

## 🏗️ Project Structure

The project follows a hierarchical content structure:

- **Sections**: Top-level categorization of medical content
- **Subjects**: Specific medical subjects (e.g., Anatomy, Physiology, Biochemistry)
- **Topics**: Individual topics within each subject
- **Posts**: Detailed notes and articles covering specific topics
- **Authors**: Medical professionals and educators who contribute content

## 🛠️ Technology Stack

- **Frontend**: Next.js
- **CMS**: Sanity.io
- **Content Structure**: Custom schema types for medical education
- **Styling**: Modern UI components and responsive design

## 📚 Content Organization

The platform organizes medical content in a structured hierarchy:

1. **Academic Structure**
   - Sections (e.g., Pre-clinical, Clinical)
   - Subjects (e.g., Anatomy, Physiology)
   - Topics (specific areas within subjects)

2. **Content Types**
   - Posts: Detailed notes and articles
   - Authors: Medical professionals and educators
   - Categories: Content categorization
   - Block Content: Rich text content with formatting

## 🚀 Features

- Hierarchical content organization
- Rich text editing capabilities
- Author management system
- Responsive design for all devices
- SEO-friendly content structure
- Easy content management through Sanity Studio

## 🏁 Getting Started

### Prerequisites

- Node.js (Latest LTS version)
- npm or yarn
- Sanity CLI

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/pantshaswat/ImperfectoMedicine
   cd medical-notes
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Set up environment variables:
   Create a `.env.local` file with your Sanity project credentials:
   ```
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=

SANITY_STUDIO_PROJECT_ID=
SANITY_STUDIO_DATASET=
   ```

4. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Access Sanity Studio:
   ```bash
   npm run sanity dev
   # or
   yarn sanity dev
   ```

## 📝 Content Management

The platform uses Sanity Studio for content management, allowing:

- Easy creation and editing of medical notes
- Management of authors and contributors
- Organization of content into sections, subjects, and topics
- Rich text editing with medical-specific formatting
- Image management with proper attribution

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.



## 🙏 Acknowledgments

- Built for MBBS students and medical educators
- Special thanks to the medical community for their valuable input
- Powered by Next.js and Sanity.io
