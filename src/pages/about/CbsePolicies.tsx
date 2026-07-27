import React, { useState } from 'react';
import { 
  FileText, 
  Download, 
  ExternalLink, 
  ShieldCheck, 
  BookOpen, 
  CheckCircle2, 
  Search,
  ChevronRight,
  AlertCircle
} from 'lucide-react';

interface DisclosureItem {
  id: string;
  title: string;
  category: 'mandatory' | 'academic' | 'infrastructure' | 'safety';
  fileSize: string;
  updateDate: string;
  link: string;
}
import { FeatureHighlightSection } from '../../components/FeatureHighlightSection';

export const CbsePolicies: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'mandatory' | 'academic' | 'infrastructure' | 'safety'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const disclosures: DisclosureItem[] = [
    {
      id: 'doc-1',
      title: 'Affiliation and Extension Letter from CBSE',
      category: 'mandatory',
      fileSize: '1.2 MB',
      updateDate: 'Jan 2026',
      link: '#'
    },
    {
      id: 'doc-2',
      title: 'Societies/Trust Registration & Renewal Certificate',
      category: 'mandatory',
      fileSize: '850 KB',
      updateDate: 'Jan 2026',
      link: '#'
    },
    {
      id: 'doc-3',
      title: 'No Objection Certificate (NOC) Issued by State Govt',
      category: 'mandatory',
      fileSize: '920 KB',
      updateDate: 'Dec 2025',
      link: '#'
    },
    {
      id: 'doc-4',
      title: 'Building Safety Certificate as per National Building Code',
      category: 'infrastructure',
      fileSize: '2.1 MB',
      updateDate: 'Feb 2026',
      link: '#'
    },
    {
      id: 'doc-5',
      title: 'Fire Safety Certificate Issued by Competent Authority',
      category: 'safety',
      fileSize: '1.5 MB',
      updateDate: 'Feb 2026',
      link: '#'
    },
    {
      id: 'doc-6',
      title: 'Water Health and Sanitation Safety Certificate',
      category: 'safety',
      fileSize: '780 KB',
      updateDate: 'Jan 2026',
      link: '#'
    },
    {
      id: 'doc-7',
      title: 'Annual Academic Calendar & Fee Structure (2026-27)',
      category: 'academic',
      fileSize: '3.4 MB',
      updateDate: 'Mar 2026',
      link: '#'
    },
    {
      id: 'doc-8',
      title: 'School Managing Committee (SMC) List & Constitution',
      category: 'mandatory',
      fileSize: '650 KB',
      updateDate: 'Jan 2026',
      link: '#'
    },
    {
      id: 'doc-9',
      title: 'Parent Teachers Association (PTA) Members List',
      category: 'academic',
      fileSize: '510 KB',
      updateDate: 'Feb 2026',
      link: '#'
    },
    {
      id: 'doc-10',
      title: 'Three Year Results of Board Examinations (AISSE/AISSCE)',
      category: 'academic',
      fileSize: '1.1 MB',
      updateDate: 'May 2025',
      link: '#'
    }
  ];

  const filteredDocs = disclosures.filter(doc => {
    const matchesTab = activeTab === 'all' || doc.category === activeTab;
    const matchesSearch = doc.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header Hero */}
        <div className="bg-gradient-to-r from-blue-950 via-slate-900 to-blue-900 rounded-3xl p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/30 text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4" /> Compliance & Transparency
            </span>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
              CBSE Mandatory Public Disclosures
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              In accordance with Central Board of Secondary Education (CBSE) guidelines, we maintain full public disclosure of all essential school certificates, safety compliance reports, fee structure, and governance policies.
            </p>
          </div>
        </div>

        {/* Essential Info Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm flex items-start gap-4">
            <div className="p-3 bg-blue-50 text-blue-950 rounded-xl">
              <BookOpen className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Affiliation No.</p>
              <h4 className="text-lg font-black text-slate-900 mt-0.5">2133489</h4>
              <p className="text-[11px] text-slate-500">CBSE New Delhi</p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm flex items-start gap-4">
            <div className="p-3 bg-amber-50 text-amber-600 rounded-xl">
              <FileText className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">School Code</p>
              <h4 className="text-lg font-black text-slate-900 mt-0.5">61352</h4>
              <p className="text-[11px] text-slate-500">Senior Secondary Level</p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm flex items-start gap-4">
            <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Status</p>
              <h4 className="text-lg font-black text-emerald-600 mt-0.5">Provisional Valid</h4>
              <p className="text-[11px] text-slate-500">Up to Higher Secondary</p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm flex items-start gap-4">
            <div className="p-3 bg-purple-50 text-purple-600 rounded-xl">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Safety Certified</p>
              <h4 className="text-lg font-black text-slate-900 mt-0.5">100% Compliant</h4>
              <p className="text-[11px] text-slate-500">Fire, Building & Water</p>
            </div>
          </div>
        </div>

        {/* Documents Filtering & Search Bar */}
        <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-sm space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-6">
            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-2">
              {[
                { id: 'all', label: 'All Documents' },
                { id: 'mandatory', label: 'Mandatory Affiliation' },
                { id: 'infrastructure', label: 'Infrastructure' },
                { id: 'safety', label: 'Safety & Health' },
                { id: 'academic', label: 'Academics & Fee' }
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                    activeTab === tab.id
                      ? 'bg-blue-950 text-white shadow-md shadow-blue-950/20'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
              <input
                type="text"
                placeholder="Search disclosure document..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 text-xs rounded-xl border border-slate-200 focus:outline-none focus:border-blue-950 bg-slate-50"
              />
            </div>
          </div>

          {/* Document List Table / Grid */}
          <div className="space-y-3">
            {filteredDocs.length > 0 ? (
              filteredDocs.map((doc) => (
                <div
                  key={doc.id}
                  className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-2xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:border-slate-200 hover:shadow-md transition-all group"
                >
                  <div className="flex items-start gap-3.5">
                    <div className="p-2.5 bg-blue-950/5 text-blue-950 rounded-xl group-hover:bg-amber-500 group-hover:text-white transition-colors mt-0.5">
                      <FileText className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-sm group-hover:text-blue-950 transition-colors">
                        {doc.title}
                      </h3>
                      <div className="flex items-center gap-3 text-[11px] text-slate-500 mt-1">
                        <span className="capitalize font-semibold text-amber-600 bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200/50">
                          {doc.category}
                        </span>
                        <span>Size: {doc.fileSize}</span>
                        <span>•</span>
                        <span>Updated: {doc.updateDate}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 self-end sm:self-center">
                    <a
                      href={doc.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold text-blue-950 bg-blue-50 hover:bg-blue-100 transition-colors"
                    >
                      View <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                    <a
                      href={doc.link}
                      download
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold text-white bg-blue-950 hover:bg-amber-500 hover:text-slate-950 transition-colors shadow-sm"
                    >
                      Download <Download className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-12 bg-slate-50 rounded-2xl border border-dashed border-slate-200">
                <AlertCircle className="w-10 h-10 text-slate-300 mx-auto mb-2" />
                <p className="text-slate-600 font-bold text-sm">No documents found matching your filter</p>
                <p className="text-slate-400 text-xs mt-1">Try resetting your search query or choosing another category.</p>
              </div>
            )}
          </div>
        </div>

        {/* Information Disclaimer Note */}
        <div className="p-6 bg-amber-50 border border-amber-200/70 rounded-2xl text-amber-900 text-xs leading-relaxed flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <div>
            <span className="font-bold">Notice to Parents & Authorities:</span> Copies of all listed documents are available for inspection in the administrative office of Pavna International School during working hours. For additional clarification regarding CBSE affiliation norms or policy guidelines, please contact our Compliance Officer at <span className="font-bold underline">compliance@pavnaschool.com</span>.
          </div>
        </div>
        <FeatureHighlightSection/>

      </div>
    </div>
  );
};